import { GetStaticProps } from "next";
import Head from "next/head";

export default function Sitemap() {
    return <Head>
        <meta httpEquiv="refresh" content="0; url=/sitemap.xml" />
    </Head>;
}

export const getStaticProps: GetStaticProps = async () => {
    const fs = require("fs");
    const path = require("path");
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");

    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
    const pagesDir = path.join(process.cwd(), "pages");
    const getAllPages = (dir: string, baseUrl: string) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                getAllPages(fullPath, baseUrl + entry.name + "/");
                continue;
            }
            
            if (entry.isFile() && entry.name.endsWith(".tsx") && entry.name !== "_app.tsx" && entry.name !== "_document.tsx" && entry.name !== "sitemap.tsx" && entry.name !== "rss.tsx") {
                const lastmod = fs.statSync(fullPath).mtime;

                const urlPath = baseUrl + (entry.name === "index.tsx" ? "" : entry.name.replace(".tsx", ""));
                sitemapXml += `  <url>\n`
                + `    <loc>https://www.pitan76.net/${urlPath}</loc>\n`
                + `    <lastmod>${lastmod.toISOString()}</lastmod>\n`
                + `    <priority>0.8</priority>\n`
                + `  </url>\n`;
            }
        }
    }
    getAllPages(pagesDir, "");
    fs.writeFileSync(sitemapPath, sitemapXml + `</urlset>`);

    return {
        props: {}
    };
};