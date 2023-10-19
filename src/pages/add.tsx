import React from 'react';
import Layout from "@/element/layout";

function Add() {
    return (
        <div>To Do</div>
    );
}

Add.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Add;