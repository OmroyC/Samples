import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';
export default function MPInfoMainResult(props) {
    
    const [showProfileInfo, setShowProfileInfo] = useState(false);

    useEffect(() =>{
        
        setShowProfileInfo(true);

    }, [])

    let mpInfo_result, missing_mpInfo_results;

    console.log("props.mpProfile", props.mpProfile)

    if(props.mpProfile.objects.length) {
            
        mpInfo_result = (
            <>
                <TransitionGroup 
                >
                    <div className="row">
                        <div className="col-sm-12, col-md-2, col-lg-2">
                            <CSSTransition
                                in={showProfileInfo}
                                classNames="mainResult1"
                                key={1}
                                timeout={300}
                            >
                                <img 
                                    id="mpProfilePic"
                                    src={props.mpProfile.objects[0].photo_url}
                                    alt={props.mpProfile.objects[0].name}
                                    className="img-fluid img-thumbnail"
                                />
                            </CSSTransition>
                        </div>
                      
                            <div className="col-sm-12, col-md-4, col-lg-4">
                                <CSSTransition
                                    in={showProfileInfo}
                                    classNames="mainResult2"
                                    
                                    key={2}
                                    timeout={300}
                                >
                                    <h1 className="display-6">
                                        
                                    Name: <small id="mpProfileName" className="text-muted">
                                            {props.mpProfile.objects[0].name}
                                        </small>
                                    </h1>
                                    </CSSTransition>
                                    <CSSTransition
                                    in={showProfileInfo}
                                    classNames="mainResult2"
                                    
                                    key={3}
                                    timeout={300}
                                >
                                    <h1 className="display-6">
                                    Gender: <small id="mpProfileGender" className="text-muted">
                                            {props.mpProfile.objects[0].gender}
                                        </small>
                                    </h1>

                                 </CSSTransition>
                            </div>
                       
                     
                        <div className="col-sm-12, col-md-6, col-lg-6">  
                        <CSSTransition
                            in={showProfileInfo}
                            classNames="mainResult2"
                            
                            key={4}
                            timeout={300}
                        > 
                        <h1 className="display-6">
                                
                                Preferred Language: <small id="mpProfileLanguage" className="text-muted">
                                    {props.mpProfile.objects[0].extra.preferred_languages[0]}
                                </small>
                            </h1></CSSTransition>
                            <CSSTransition
                                    in={showProfileInfo}
                                    classNames="mainResult2"
                                    
                                    key={5}
                                    timeout={300}
                                >
                            <h1 className="display-6">
                            
                            Email: <small id="mpProfileEmail" className="text-muted">
                                    {props.mpProfile.objects[0].email}
                                </small>
                            </h1></CSSTransition>
                        
                        </div>
                    </div>

                    <div className="row" style={{marginTop: 16 + 'px'}}>
                        <div className="col-sm-12, col-md-4, col-lg-4">
                        <CSSTransition
                                    in={showProfileInfo}
                                    key={6}
                                    classNames="mainResult2"
                                    
                                    timeout={300}
                                >
                        <h1 className="display-6">
                                
                            District name: <small id="mpProfileDistrict" className="text-muted">
                                    {props.mpProfile.objects[0].district_name}
                                </small>
                            </h1></CSSTransition>
                            <CSSTransition
                                    in={showProfileInfo}
                                    classNames="mainResult2"
                                    
                                    key={7}
                                    timeout={300}
                                >
                            <h1 className="display-6">
                                
                            Party name: <small id="mpProfileParty" className="text-muted">
                                    {props.mpProfile.objects[0].party_name}
                                </small>
                            </h1></CSSTransition>
                        
                        </div>
                        <div className="col-sm-12, col-md-4, col-lg-4">
                        <CSSTransition
                            in={showProfileInfo}
                            classNames="mainResult2"
                            
                            key={8}
                            timeout={300}
                        >
                            <h1 className="display-6">
                                Website
                            </h1></CSSTransition>
                            <CSSTransition
                                    in={showProfileInfo}
                                    classNames="mainResult2"
                                    
                                    key={9}
                                    timeout={300}
                                >
                            <ul className="list-group list-group-flush">
                                {props.mpProfile.objects[0].url !== ''  
                                    ? <li id="mpProfileRepSite" className="list-group-item"><em><a className="text-muted" href={props.mpProfile.objects[0].url}>Representative Official Site</a></em></li>
                                    : <li id="mpProfileNoRepSite" className="list-group-item"><em>No Representative website</em></li>
                                }
                                {props.mpProfile.objects[0].personal_url !== ''  
                                    ? <li id="mpProfilePersonalSite" className="list-group-item"><em><a className="text-muted" href={props.mpProfile.objects[0].personal_url}>Personal</a></em></li> 
                                    : <li id="mpProfileNoPersonalSite" className="list-group-item"><em>No personal site</em></li>
                                }
                            </ul></CSSTransition>
                            
                        </div>
                        <div className="col-sm-12, col-md-4, col-lg-4">
                        <CSSTransition
                            in={showProfileInfo}
                            key={10}
                            classNames="mainResult2"
                            
                            timeout={300}
                        >
                        <h1 className="display-6">Contact</h1>
                        </CSSTransition>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                <CSSTransition
                                    in={showProfileInfo}
                                    key={10}
                                    classNames="mainResult2"
                                    
                                    timeout={300}
                                >
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            House of Commons
                                        </button>
                                        </h2>
                                        </CSSTransition>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <CSSTransition
                                            in={showProfileInfo}
                                            key={7}
                                            classNames="mainResult2"
                                            
                                            timeout={300}
                                        >
                                        <div className="accordion-body">
                                            <h5 id="mpProfileHCAddress" className="card-title">
                                                {props.mpProfile.objects[0].offices[0].postal}
                                            </h5>
                                            <p className="card-text">
                                                <strong>Type</strong>: &nbsp;
                                                <span id="mpProfileHCType" className="text-muted">{props.mpProfile.objects[0].offices[0].type}</span>
                                            </p>
                                            <p className="card-text">
                                                <strong>Tel</strong>: &nbsp;
                                                <span id="mpProfileHCTel" className="text-muted">{props.mpProfile.objects[0].offices[0].tel}</span>
                                            </p>
                                            <p className="card-text">
                                                <strong>Fax</strong>: &nbsp;
                                                <span id="mpProfileHCFax" className="text-muted">{props.mpProfile.objects[0].offices[0].fax}</span>
                                            </p>
                                        </div>
                                        </CSSTransition>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <CSSTransition
                                            in={showProfileInfo}
                                            key={11}
                                            classNames="mainResult2"
                                            
                                            timeout={300}
                                        >
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Main Office
                                        </button>
                                        </h2>
                                        </CSSTransition>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <CSSTransition
                                            in={showProfileInfo}
                                            key={12}
                                            classNames="mainResult2"
                                            
                                            timeout={300}
                                        >
                                            <div className="accordion-body">
                                                <h5 id="mpProfileMOAddress" className="card-title">
                                                    {props.mpProfile.objects[0].offices[1].postal}
                                                </h5>
                                                <p className="card-text">
                                                    <strong>Type</strong>: &nbsp;
                                                    <span id="mpProfileMOOffices" className="text-muted">{props.mpProfile.objects[0].offices[1].type}</span>
                                                </p>
                                                <p className="card-text">
                                                    <strong>Tel</strong>: &nbsp;
                                                    <span id="mpProfileMOTel" className="text-muted">{props.mpProfile.objects[0].offices[1].tel}</span>
                                                </p>
                                                <p className="card-text">
                                                    <strong>Fax</strong>: &nbsp;
                                                    <span id="mpProfileMOFax" className="text-muted">{props.mpProfile.objects[0].offices[1].fax}</span>
                                                </p>
                                            </div>
                                            </CSSTransition>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            
                        </div>
                    </TransitionGroup>
                </>
        );
        
    } else {
        missing_mpInfo_results = (<p>The MP of {props.city} does not have no information at the present moment</p>);
    }

    

    return (
        <div>
            {props.mpProfile.objects.length ? mpInfo_result : missing_mpInfo_results}
        </div>
    )
}