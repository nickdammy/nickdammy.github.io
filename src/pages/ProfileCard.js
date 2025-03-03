function ProfileCard({ title,handle,image,text,years }) {
   
    return (
        <div className="card" style={{ width:"18rem" }}>

            <div className="card-img"> 
                <img src={ image } alt="based on company" className="card-img-top-dami"></img> 
            </div>
            
            <div className="card-body">
                 <h7 className="card-title">{ title } </h7>
                 <p> { handle }</p>
                 <p className="card-text">{ text }</p>
                 <p> { years } </p>
                 
             </div>
        </div>
    );
}
export default ProfileCard;