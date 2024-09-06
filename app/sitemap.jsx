export default function sitemap() {
    return [
      {
        url: 'http://localhost:3000',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'http://localhost:3000/terms-conditions',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
      },
      {
        url: 'http://localhost:3000/privacy-policies',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.4,
      },
      {
        url: 'http://localhost:3000/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.7,
      },
      {
        url: 'http://localhost:3000/category',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'http://localhost:3000/service',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }