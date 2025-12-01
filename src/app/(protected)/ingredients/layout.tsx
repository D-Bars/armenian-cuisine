import { FC } from "react";

interface IProps {
    children: React.ReactNode;
}

const IngridientsLayout: FC<IProps> = ({children}) => {
    return <section>{children}</section>;
};
export default IngridientsLayout;