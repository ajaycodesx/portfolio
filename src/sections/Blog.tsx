'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Tag from '@/components/ui/Tag';
import Card from '@/components/ui/Card';
import { blogPosts } from '@/data/blog';

export default function Blog() {
  return (
    <Section id="blog">
      <SectionHeader
        subtitle="Latest Articles"
        title="From the Blog"
        description="Sharing knowledge and insights about modern web development."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full flex flex-col cursor-pointer"
          >
            <Card delayIndex={index} className="overflow-hidden">
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur border border-blue-500/30 text-blue-400 text-xs font-medium">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <motion.span
                    className="text-blue-400 flex items-center gap-1 text-sm font-medium"
                    whileHover={{ x: 4 }}
                  >
                    Read <ArrowRight size={14} />
                  </motion.span>
                </div>
              </div>
            </Card>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
