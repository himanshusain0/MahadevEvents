// src/app/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wedding Decoration Blog | Outdoor Marketing Tips & Insights | Mahadev Events Khatauli',
  description: 'Expert insights on outdoor Wedding Decoration, Stage & Venue Decoration marketing, Theme Decoration, and brand promotion strategies for businesses in Khatauli and Khatauli.',
  keywords: 'Wedding Decoration blog, outdoor marketing tips, Stage & Venue Decoration Wedding Decoration guide, wall painting benefits, Wedding Decoration insights Khatauli',
  alternates: {
    canonical: 'https://mahadev-eventKhatauli.com/blog',
  },
};

const blogPosts = [
  {
    slug: 'benefits-of-Stage & Venue Decoration-Wedding Decoration',
    title: 'Top 10 Benefits of Stage & Venue Decoration Wedding Decoration for Local Businesses',
    excerpt: 'Discover why Stage & Venue Decoration Wedding Decoration remains the most effective outdoor marketing strategy for businesses in Khatauli and how it can boost your brand visibility.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Stage & Venue Decoration Wedding Decoration'
  },
  {
    slug: 'digital-wall-painting-vs-traditional-ads',
    title: 'Theme Decoration vs Traditional Wedding Decoration: Which is Better?',
    excerpt: 'Compare the costs, longevity, and effectiveness of Theme Decoration versus traditional Wedding Decoration methods for businesses in Khatauli.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Wall Painting'
  },
  {
    slug: 'outdoor-Wedding Decoration-cost-Khatauli',
    title: 'Complete Guide to Outdoor Wedding Decoration Costs in Khatauli (2024)',
    excerpt: 'Detailed breakdown of Stage & Venue Decoration, Floral Decoration, wall painting, and vehicle branding costs in Khatauli. Get the best ROI for your Wedding Decoration budget.',
    date: '2024-01-05',
    readTime: '8 min read',
    category: 'Pricing Guide'
  },
  {
    slug: 'best-locations-Stage & Venue Decoration-Khatauli',
    title: 'Best Locations for Stage & Venue Decoration Wedding Decoration in Khatauli',
    excerpt: 'Discover the top 20 locations for Stage & Venue Decoration Wedding Decoration in Khatauli with highest traffic and visibility. Strategic spots for maximum brand exposure.',
    date: '2023-12-28',
    readTime: '6 min read',
    category: 'Location Guide'
  },
  {
    slug: 'vehicle-branding-benefits',
    title: 'Why Vehicle Branding is the Most Cost-Effective Mobile Wedding Decoration',
    excerpt: 'Learn how vehicle branding can give your business thousands of daily impressions at a fraction of the cost of traditional Wedding Decoration.',
    date: '2023-12-20',
    readTime: '5 min read',
    category: 'Vehicle Branding'
  }
];

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4D0E13]">Wedding Decoration Blog & Insights</h1>
      <p className="text-xl text-gray-600 mb-12">Expert tips, guides, and insights for outdoor Wedding Decoration in Khatauli & Khatauli</p>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-[#0C3B2E] transition">{post.title}</h2>
            </Link>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
              <span className="mx-2">•</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{post.category}</span>
            </div>
            <p className="text-[#C8A49F] mb-3">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-[#0C3B2E] font-medium hover:underline">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}