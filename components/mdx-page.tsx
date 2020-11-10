import type { ReactNode } from "react";

export interface MDXPageProps {
    children: ReactNode;
}

function MDXPage ({ children }: MDXPageProps) {
    return <div>
        MDX Page: {children}
    </div>
}

export default MDXPage;
