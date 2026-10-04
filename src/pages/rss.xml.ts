import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const projects = await getCollection('projects');
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  );

  return rss({
    title: 'Matthew P. | Systems & Architecture',
    description: 'Technical case studies and architecture reviews of distributed systems and low-latency infrastructure.',
    site: context.site ? context.site.toString() : 'https://example.com',
    items: sortedProjects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.publishDate,
      description: project.data.description,
      link: `/projects/${project.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
