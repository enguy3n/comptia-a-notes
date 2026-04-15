function Unit1(){
    return(
        <>
            <h2 id="1.1">CompTIA Troubleshooting Methodology</h2>
                <p>
                    Keep in mind: sometimes it's more important to first resolve the consequences of a problem 
                    before addressing their original cause. 
                    Simultaneously, problems should be evaluated to identify their original causes: a problem could 
                    be a symptom of a larger problem that may cause other problems to reoccur.
                    Issues should be dealt with according to their priorities and severities. 
                </p>
                <ol>
                    <li>
                        <b>Identify the Problem:</b> gather info, exact error messages, perform backups, evaluate recent changes to a system, widespreadness of problem. 
                        <b>Note:</b> you cannot always rely on users to describe a problem accurately.
                    </li>
                    <li>
                        <b>Establish Theory of Probable Cause:</b> inspect device physically, attempt reproduction of issue, check documentation or other techs who've worked 
                        on system recently or on a related issue. Question the obvious (EX, cabling, whether issue is hardware/software).
                    </li>
                    <li>
                        <b>Test Theory to Determine Cause:</b> if theory is confirmed, move on to next step. If not, re-establish new theory or escalate.
                    </li>
                    <li>
                        <b>Establish Plan of Action:</b> note that an apparent solution may be impractical or too costly and consider workarounds. 
                        Factor in repair or replacement costs.
                    </li>
                    <li>
                        <b>Verify System Functionality:</b> after resolving problem, verify system is functional and implement preventative measures if applicable.
                    </li>
                    <li>
                        <b>Document Findings:</b> document lessons learned, actions taken and their outcomes.
                    </li>
                </ol>
        </>
    );
}

export default Unit1;