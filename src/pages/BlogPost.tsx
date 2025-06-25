import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ReadingProgress from '@/components/ReadingProgress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';


const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) console.error(error);
      else setPost(data);

      setLoading(false);
    };

    fetchPost();
  }, [id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleShare = () => {
    navigator.share({
      title: post?.title,
      url: window.location.href,
    }).catch(() => {
      navigator.clipboard.writeText(window.location.href);
    });
  };

  if (loading) return <div className="p-8 text-center">Loading post...</div>;
  if (!post) return <div className="p-8 text-center">Post not found.</div>;

  return (
    <div className="min-h-screen">
     <Navigation />
    
      <article className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* ...Back button, image, etc. */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-accent text-accent-foreground">{post.category}</Badge>
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2"><User className="h-4 w-4" /><span>{post.author}</span></div>
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>{formatDate(post.published_at)}</span></div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>{post.read_time} min read</span></div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="flex items-center gap-2"><Heart className="h-4 w-4" />{post.likes}</Button>
              <Button variant="outline" size="sm" onClick={handleShare} className="flex items-center gap-2"><Share2 className="h-4 w-4" />Share</Button>
            </div>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div 
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^# /gm, '<h1 class="text-3xl font-bold gradient-text mb-6 mt-8">')
                  .replace(/^## /gm, '<h2 class="text-2xl font-semibold mb-4 mt-6">')
                  .replace(/^### /gm, '<h3 class="text-xl font-medium mb-3 mt-4">')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-accent">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/```typescript([\s\S]*?)```/g, '<pre class="glass p-4 rounded-lg my-4 overflow-x-auto"><code class="text-accent">$1</code></pre>')
                  .replace(/```([\s\S]*?)```/g, '<pre class="glass p-4 rounded-lg my-4 overflow-x-auto"><code>$1</code></pre>')
                  .replace(/`(.*?)`/g, '<code class="bg-accent/10 text-accent px-2 py-1 rounded text-sm">$1</code>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^(?!<[h|p|u|c])/gm, '<p class="mb-4">')
                  .replace(/- (.*?)$/gm, '<li class="mb-2">$1</li>')
                  .replace(/(<li.*<\/li>)/s, '<ul class="list-disc pl-6 mb-4">$1</ul>')
              }}
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
