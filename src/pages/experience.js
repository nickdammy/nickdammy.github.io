import ProfileCard from "./ProfileCard";
//import ProfilePic from "../images/profilepic.png";
import UtaPic from "../images/uta2.png";
import UtsystemPic from "../images/utsystem3.png";
import EonePic from "../images/eone2.svg";
import UndPic from "../images/und.png";
import BlankPic from "../images/blank.png";


function Experience(){
    return (
        <div className="expContent">
            <h1 className="title">Experiences </h1>
            
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-sm-3 d-flex justify-content-center">
                        <ProfileCard title="University Of North Dakota" 
                        handle="@UND" 
                        text="Front-End Developer" 
                        image={UndPic}
                        years="2024-Present"
                        />
                    </div>

                    <div className="col-sm-3 d-flex justify-content-center">
                        <ProfileCard title="University Of Texas at Arlington" 
                        handle="@UTA" 
                        text="Web Developer" 
                        image={UtaPic}
                        years="2023-2024"
                        />
                    </div>

                    <div className="col-sm-3 d-flex justify-content-center">
                        <ProfileCard title="UT System" 
                        handle="@utsystem" 
                        text="Web Developer" 
                        image={UtsystemPic}
                        years="2022-2023"
                        />
                    </div>

                    <div className="col-sm-3 d-flex justify-content-center">
                        <ProfileCard title="eOne Solutions" 
                        handle="@eOne" 
                        text="Software Developer" 
                        image={EonePic}
                        years="2020-2023"
                        />
                    </div>

                    <div className="col-sm-3 d-flex justify-content-center">
                        <ProfileCard title="True IT" 
                        handle="@TrueIT" 
                        text="Software Developer" 
                        image={BlankPic}
                        years="2019-2020"
                        />
                    </div>

                    <div className="col-sm-3 d-flex justify-content-center">
                        <ProfileCard title="Riviera Nexus" 
                        handle="@Nexus" 
                        text="Software Developer Intern" 
                        image={BlankPic}
                        years="2018"
                        />
                    </div>

                </div>
            </div>

            <style>
            {`


            @media (max-width: 576px) {
                .col-sm-3 {
                    margin-bottom: 15px;
                }
            }
            `}
            </style>
            
        </div>
        
    );
}

export default Experience;