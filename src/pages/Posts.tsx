
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchPosts, fetchComments } from '@/store/postsSlice';
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, comments, loading, error } = useSelector((state: RootState) => state.posts);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }, [dispatch]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPostComments = (postId: number) => {
    return comments.filter(comment => comment.postId === postId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-24">
          <div className="text-center">Loading posts...</div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-24">
          <div className="text-center text-red-500">Error: {error}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto mb-8 relative">
          <Input
            type="search"
            placeholder="Search posts by title or content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-[rgb(127,33,145)]">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.body}</p>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <h4 className="font-semibold text-sm text-gray-700">Comments:</h4>
                <div className="space-y-2">
                  {getPostComments(post.id).map((comment) => (
                    <div key={comment.id} className="text-sm bg-gray-50 p-3 rounded">
                      <p className="font-medium text-[rgb(127,33,145)]">{comment.email}</p>
                      <p className="text-gray-600">{comment.body}</p>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No posts found matching your search.
          </div>
        )}
      </main>
    </div>
  );
};

export default Posts;
