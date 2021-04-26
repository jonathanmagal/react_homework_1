import { Agent } from 'node:https';
import React, { useEffect, useState } from 'react';
import { setConstantValue } from 'typescript';

export type User = {
    name: string;
    age: number;
    medicalCondition: number;
}

export const Counter = (props: User) => {
     
    const [age, setAge] = React.useState(props.age)
    const [medicalCondition, setMedical] = React.useState(props.medicalCondition)
    const [isFetching, setIsFetching] = useState(false)

    const handleClick = () => {
        setAge(age+1)  
        setMedical(medicalCondition-3)
    }

    useEffect(() => {
        setIsFetching(true);
    }, []);

    if (!isFetching) {
        return (
            <div>
               <h3>4444</h3>
            </div>
        )
    }

    if (isFetching) {
    return (
    <div>
        <h2>{`Name: ${props.name}`}</h2>
        <p>{`Age: ${age}`}</p>
        <div></div>
        <h4>Increse age and watch the future helth condition:</h4>
        <button id="bla" onClick={handleClick}>Increse</button>
        <p>{medicalCondition}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestias reiciendis porro sunt impedit facere ea accusamus veritatis quo hic possimus animi suscipit qui assumenda fugit sit, incidunt asperiores velit.
        Vel at, accusantium alias quo obcaecati ut cum dignissimos doloribus minima? Voluptates pariatur accusantium, et aliquid exercitationem facere quibusdam. Dolorum dicta voluptatem consequatur atque repellendus ratione sequi dolorem nemo eos.
        Alias odit, laborum earum corrupti libero veritatis quisquam, totam culpa aliquid sequi, quo voluptates voluptatem exercitationem excepturi beatae odio! Architecto quis perspiciatis error nobis adipisci! Inventore ea saepe iure a!
        Laudantium, facere qui vitae doloribus molestiae quia reprehenderit, tenetur, voluptatum aliquid magnam praesentium? Accusamus quaerat nobis laborum quibusdam magni, atque nesciunt ut molestias libero sint, exercitationem modi quas sit? Ipsam.
        Perferendis pariatur neque, temporibus accusantium, exercitationem, reiciendis libero ab accusamus eveniet minus ipsa! Repellendus, exercitationem blanditiis ab qui excepturi reprehenderit magnam temporibus velit doloremque eaque impedit quas at! Architecto, numquam.
        Id libero magnam magni eligendi quisquam. Quia, eligendi nobis.</p>
    </div>
    ); 
}
}



