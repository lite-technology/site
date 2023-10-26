import {
    HeaderSection,
    BodySection,
    NavigationSection,
} from "@components/error-partials";
import { useParams } from "react-router-dom";

export default (props) => {
    const { code } = useParams();
    const selectCode = parseInt(code) || parseInt(props.code);

    return (
        <>
            <HeaderSection />
            <BodySection code={selectCode} />
            <NavigationSection />
        </>
    );
};
