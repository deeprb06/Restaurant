import { useState } from 'react';

const Section = ({ title, description, isVisible, tag, setSectionConfig }) => {
    return (
        <div className="border border-black">
            <h2 className="font-bold p-2 m-2">{title}</h2>
            {isVisible ? (
                <>
                    <button onClick={() => setSectionConfig('')}>Hide</button>
                    <p>{description}</p>
                </>
            ) : (
                <button onClick={() => setSectionConfig(tag)}>Show</button>
            )}
        </div>
    );
};

const Instamart = () => {
    const [sectionConfig, setSectionConfig] = useState('');

    return (
        <>
            <Section
                title={'About Instamart'}
                description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`}
                isVisible={sectionConfig === 'about'}
                tag={'about'}
                setSectionConfig={setSectionConfig}
            />
            <Section
                title={'Team Instamart'}
                description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`}
                isVisible={sectionConfig === 'team'}
                tag={'team'}
                setSectionConfig={setSectionConfig}
            />
            <Section
                title={'Career Instamart'}
                description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`}
                isVisible={sectionConfig === 'career'}
                tag={'career'}
                setSectionConfig={setSectionConfig}
            />
        </>
    );
};

export default Instamart;
