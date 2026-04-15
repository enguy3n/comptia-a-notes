// replaces normal html <a> tags to work with react router and github pages

import { useNavigate } from "react-router-dom";

type Props = {
    href: string,
    bodyText: string,
}
function RouterLink({href, bodyText}: Props){
    const navigate = useNavigate();
    let  destination: string = `/comptia-a-notes${href}`;
    
    console.log("RouterLink component activated:"+destination);

    const handleClick = () => {
        navigate(destination);
    }

    return(
        <span className="link" onClick={handleClick}>{bodyText}</span>
    )
}

export default RouterLink;