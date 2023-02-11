const MyHeading=({name,text,price})=>{
    const obj={
        abb:12,
        ccd:2323,
    };
    const {abb,ccd}=obj
    return (
        <>
        <h1>{name }</h1>
        <MyHeadingLittle value={price}/>
        <div>{text}</div>
        <main>This is main</main>
        <footer>{obj.abb}</footer>
        </>
    );

};
export const MyHeadingLittle=({value})=><h4>{value}</h4>;
export const MyHeadingLittle2=()=><h4>Heading Little2</h4>;
export const MyHeadingLittle3=()=><h4>Heading Little3</h4>;    
       
    


export default MyHeading;

