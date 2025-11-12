"use client";

import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

const PageContent = () => {
    const pathName = usePathname();
    const pageContent = siteConfig.pagesContent[pathName as keyof typeof siteConfig.pagesContent];
   
    if(!pageContent) {
        return <div>page not found</div>
    }

    const cleanHtml = DOMPurify.sanitize(pageContent.content);

    return <div>{parse(cleanHtml)}</div>;
};
export default PageContent;