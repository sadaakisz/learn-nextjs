import LikeButton from "./like-button";

function LinkToTutorial() {
    return <a href="https://nextjs.org/learn/react-foundations/building-ui-with-components"> Link </a>;
}

function Header({title}) {
    console.log(title); // {title: "React"}
    return <h1>{title ? title : 'Default Title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="React" />
            <Header title="A new title"/>
            <LinkToTutorial />

            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}