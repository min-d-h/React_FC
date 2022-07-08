import React, { useState } from 'react';

export default function Controlled() {
    const [name, setName] = useState('');
    const [textArea, setTextArea] = useState('Please write an essay about your favorite DOM element.');
    const [select, setSelect] = useState('');

    function handleChange(e) {
        const pick = e.target.name;

        if(pick === "name") {
            setName(e.target.value);
        } 
        if (pick === "textarea") {
            setTextArea(e.target.value);
        } 
        if (pick === "select") {
            setSelect(e.target.value);
        }
    }

    // function handleTextAreaChange(e) {
    //     setTextArea(e.target.value);
    // }
    // function handleSelectChange(e) {
    //     setSelect(e.target.value);
    // }

    function handleSubmit(e) {
        alert(`name: ${name}, textArea: ${textArea}, select: ${select}`);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" value={name} onChange={handleChange} />
                </label>
                <br />
                <br />
                <label>
                    Essay:
                    <textarea name="textarea" value={textArea} onChange={handleChange} />
                </label>
                <br />
                <br />
                <label>
                    Pick your favorite flavor:
                    <select name="select" value={select} onChange={handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
