const setLineBreak = (content) => {
    let splittedContent = content.split(/\\n|\r\n/)
    console.log(splittedContent);
    splittedContent.forEach((item,index) => {
        if(item === ""){
            splittedContent[index] = <br />
        }
    })
    return splittedContent
}
export default setLineBreak;