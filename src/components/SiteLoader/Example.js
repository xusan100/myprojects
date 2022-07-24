import React from "react";
import ReactLoading from "react-loading";
import {Article, list, Section} from "./generic";
import "./loader.css"

const Example = () => (
    <Section>
        {list.map(l => (
            <Article key={l.prop}>
                <ReactLoading type={l.prop} color="#3F3E43" />
            </Article>
        ))}
    </Section>
);

export default Example;
