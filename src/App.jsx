import { useState } from "react"

//props
function Content(props){
    return <h3 style={{color: "green"}}>{props.text}</h3>
}


function App(){


     const [like,setLike] = useState(10);

    return <div>
      <div style={{
        display: "flex", 
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <img 
          src="https://randomuser.me/api/portraits/men/63.jpg" 
          alt="" 
          style={{
            borderRadius: "50%", 
            width: "200px", 
            height: "200px", 
            objectFit: "cover",
            marginBottom: "20px"
          }} 
        />
        <Content text="이름 : 홍길동" />
        <Content text="성별 : 남자" />
        <Content text="소개 : 웹개발자가 되고싶은 사람입니다!" />
        <button 
          style={{
            backgroundColor: "white",
            color: "#ff4d6d",
            border: "2px solid #ff4d6d",
            padding: "12px 25px", 
            borderRadius: "30px",
            cursor: "pointer",
            marginTop: "15px",
            fontSize: "16px",
            boxShadow: "0 4px 6px rgba(255, 77, 109, 0.3)",
            transition: "all 0.2s ease",
            fontWeight: "bold",
            letterSpacing: "1px",
            transform: "scale(1)",
            fontFamily: "'Varela Round', sans-serif",
            ":hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 8px rgba(255, 77, 109, 0.4)"
            }
          }}
         onClick={()=>setLike(like+1)}
        >
          <span style={{fontSize: "24px"}}>💝</span> 좋아요 <span>{like}</span>
        </button>


      </div>
    </div>
  }

  export default App
