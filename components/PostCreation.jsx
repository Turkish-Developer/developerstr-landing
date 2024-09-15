import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '@/features/posts/postSlice';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import axios from 'axios';

function PostCreation() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user); // Fetch current user from Redux store

  console.log(user)

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [bannerImage, setBannerImage] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    async function fetchCategories() {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', text);
    postData.append('category', category);
    postData.append('bannerImage', bannerImage);
    postData.append('author', user.username); // Automatically set the author to the logged-in user

    dispatch(addPost(postData));
  };

  return (
    <motion.div
      key="postCreation"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-4 w-full p-4 md:p-8 lg:p-12"
    >
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-neutral-400">Create a New Post</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="postTitle" className="text-neutral-500">Title</label>
            <div className="bg-opacity-20 bg-neutral-700 rounded-md border border-neutral-700 h-10 flex items-center px-2">
              <Icon iconType="go" iconName="GoHeading" classname="text-neutral-400" />
              <input
                id="postTitle"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
                className="bg-opacity-0 bg-neutral-700 outline-none placeholder:text-neutral-700 w-full px-2"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="postCategory" className="text-neutral-500">Category</label>
            <div className="bg-opacity-20 bg-neutral-700 rounded-md border border-neutral-700 h-10 flex items-center px-2">
              <Icon iconType="fi" iconName="FiTag" classname="text-neutral-400" />
              <select
                id="postCategory"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-opacity-0 bg-neutral-700 outline-none text-neutral-300 w-full px-2"
              >
                <option value="" disabled>Select a category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id} className="bg-neutral-900">
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="postBanner" className="text-neutral-500">Banner Image</label>
            <div className="bg-opacity-20 bg-neutral-700 rounded-md border border-neutral-700 h-10 flex items-center px-2">
              <Icon iconType="fi" iconName="FiImage" classname="text-neutral-400" />
              <input
                id="postBanner"
                type="file"
                onChange={(e) => setBannerImage(e.target.files[0])}
                className="bg-opacity-0 bg-neutral-700 outline-none text-neutral-700 w-full px-2 file:bg-neutral-700 file:border-0 file:bg-opacity-0 file:text-neutral-700"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="content" className="text-neutral-500">Content</label>
          <MdEditor modelValue={text} onChange={setText} theme="dark" />
        </div>

        <motion.button
          type="submit"
          className="mt-4 py-2 px-4 bg-red-700 font-medium text-white rounded-md hover:bg-red-800 transition"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Create Post
        </motion.button>
      </form>
    </motion.div>
  );
}

export default PostCreation;
