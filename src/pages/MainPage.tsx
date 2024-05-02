import Header from "../components/Header/Header";
import NewBook from "../components/NewBook/NewBook";
import SubscribeCard from "../components/SubscribeCard/SubscribeCard";
import Title from "../components/Title/Title";

export default function MainPage() {
    return (
        <>
            <Title>New Releases Books</Title>
            <NewBook></NewBook>
            <SubscribeCard></SubscribeCard>
        </>
    )
}