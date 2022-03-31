type Props = {
    level?: number;
    children: React.ReactNode;
};

const Heading: React.FC<Props> = ({ level = 1, children }) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

    if (level > 0 && level <= 6) {
        return <HeadingTag>{children}</HeadingTag>;
    } else {
        throw Error(`Unknown level: ${level}`);
    }
};

export default Heading;