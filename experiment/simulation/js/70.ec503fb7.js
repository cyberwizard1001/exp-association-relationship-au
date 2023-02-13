"use strict";(self["webpackChunkexp_5"]=self["webpackChunkexp_5"]||[]).push([[70],{1883:function(e,t,n){n.r(t),n.d(t,{default:function(){return Hn}});n(7658);var l=n(3396),i=n(7139),a=n(9242);const o={class:"app"},s=["disabled"],r={id:"buttons",class:"relative"};function u(e,t,n,u,c,m){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("main",o,[(0,l._)("button",{onClick:t[0]||(t[0]=e=>c.componentSelect="InstructionsView2"),style:(0,i.j5)("InstructionsView2"===c.componentSelect?"background-color: #55acee":"")}," Instructions ",4),(0,l._)("button",{onClick:t[1]||(t[1]=e=>c.componentSelect="CustomerView2"),style:(0,i.j5)("CustomerView2"===c.componentSelect?"background-color: #55acee":"")}," Customer Class ",4),(0,l._)("button",{onClick:t[2]||(t[2]=e=>c.componentSelect="ReservationView2"),style:(0,i.j5)("ReservationView2"===c.componentSelect?"background-color: #55acee":"")}," Reservation Class ",4),(0,l._)("button",{onClick:t[3]||(t[3]=e=>c.componentSelect="VehicleView2"),style:(0,i.j5)("VehicleView2"===c.componentSelect?"background-color: #55acee":"")}," Vehicle Class ",4),(0,l._)("button",{onClick:t[4]||(t[4]=e=>c.componentSelect="ReservationSystemView2"),style:(0,i.j5)("ReservationSystemView2"===c.componentSelect?"background-color: #55acee":""),disabled:!c.reservation_complete}," Reservation System Class ",12,s),(0,l._)("button",{onClick:t[5]||(t[5]=e=>c.componentSelect="ClassView2"),style:(0,i.j5)("ClassView2"===c.componentSelect?"background-color: #55acee":"")}," Class diagram ",4),((0,l.wg)(),(0,l.j4)(l.Ob,null,[((0,l.wg)(),(0,l.j4)((0,l.LL)(c.componentSelect),{onReservationComplete:m.reservationCallback,onReservationSystemComplete:m.reservationSystemCallBack},null,40,["onReservationComplete","onReservationSystemComplete"]))],1024))]),(0,l.wy)((0,l._)("footer",null,[(0,l._)("div",r,[(0,l._)("button",{class:"navitem",onClick:t[6]||(t[6]=t=>e.$router.push("/screen-four"))}," Next ")])],512),[[a.F8,c.reservation_complete&&c.reservation_system_complete]])],64)}const c=e=>((0,l.dD)("data-v-7da74704"),e=e(),(0,l.Cn)(),e),m={class:"app"},d=c((()=>(0,l._)("div",{class:"codebox"},[(0,l._)("pre",null,'public class Customer {\n\t\n\tprivate final int customerID;\n\tprivate String email;\n\tprivate String custName;\n\tprivate long phone;\n\tprivate String city;\n\tprivate static int customerCount=0; \n\t\n\tpublic Customer()\n\t{\n\t\tcustomerCount++;\n\t\tthis.customerID=customerCount;\n\t}\n\t\n\tpublic Customer(String custName, String email) {\n\t\tthis();\n\t\tthis.custName = custName;\n\t\tthis.email=email;\n\t}\n\t\n\tpublic Customer(String custName, long phone) {\n\t\tthis();\n\t\tthis.custName = custName;\n\t\tthis.setPhone(phone);\n\t}\n\t\n\tpublic Customer(String custName, String email, long phone) {\n\t\tthis();\n\t\tthis.custName = custName;\n\t\tthis.email=email;\n\t\tthis.setPhone(phone);\n\t}\n\n\tpublic String getcustName() {\n\t\treturn custName;\n\t}\n\t\n\t\n\tpublic String getEmail() {\n\t\treturn email;\n\t}\n\n\tpublic void setEmail(String email) {\n\t\tthis.email = email;\n\t}\n\n\tpublic long getPhone() {\n\t\treturn phone;\n\t}\n\n\tpublic void setPhone(long phone) {\n\t\t\n\t\tif(phone >= 0000000000L && phone <= 9999999999L)\n\t\t\tthis.phone = phone;\n\t\telse\n\t\t\tthis.phone = 9999999999L;\n\t\t\n\t}\n\n\tpublic String getCity() {\n\t\treturn city;\n\t}\n\n\tpublic void setCity(String city) {\n\t\tthis.city = city;\n\t}\n\t\n\tpublic int getcustomerID() {\n\t\treturn customerID;\n\t}\n\t\n\tpublic String toString()\n\t{\n\t\treturn "[ID: "+ getcustomerID()+ ", Name: "+getcustName()+\n\t\t\t\t", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";\n\t}\n}\n\n      \n      ')],-1))),p=[d];function b(e,t){return(0,l.wg)(),(0,l.iD)("main",m,p)}var h=n(89);const v={},g=(0,h.Z)(v,[["render",b],["__scopeId","data-v-7da74704"]]);var _=g;const k=e=>((0,l.dD)("data-v-3056c908"),e=e(),(0,l.Cn)(),e),w={class:"app"},y=k((()=>(0,l._)("div",{id:"snackbar"},"Some text some message..",-1))),C={class:"row"},x={class:"column"},S=k((()=>(0,l._)("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Enter your code here .",-1))),f=k((()=>(0,l._)("p",{style:{padding:"25px","padding-top":"0px"}},"Follow instructions provided in the comments",-1))),j=k((()=>(0,l._)("pre",null,"import java.util.Date;\n\npublic class Reservation {\n\tprivate final int reservationID;\n\tprivate Customer customerObj;\n\tprivate Vehicle vehicleObj;\n\tprivate String contractStatus;\n\tprivate Date bookingDate;\n\tprivate Date releaseDate;\n\tprivate static int reservationCount=0;\n\n      ",-1))),U=k((()=>(0,l._)("br",null,null,-1))),D=k((()=>(0,l._)("p",{id:"comment"},"//Create a constructor for Reservation class with by passing Customer parameters and Vehicle object to establish composition",-1))),V=k((()=>(0,l._)("br",null,null,-1))),O=k((()=>(0,l._)("br",null,null,-1))),N=k((()=>(0,l._)("pre",null,"import java.util.Date;\n\npublic class Reservation {\n\tprivate final int reservationID;\n\tprivate Customer customerObj;\n\tprivate Vehicle vehicleObj;\n\tprivate String contractStatus;\n\tprivate Date bookingDate;\n\tprivate Date releaseDate;\n\tprivate static int reservationCount=0;\n\t\n\tpublic Reservation(String customerName, long phone, Vehicle vehicleObj) {\n    ",-1))),R=k((()=>(0,l._)("br",null,null,-1))),I=k((()=>(0,l._)("br",null,null,-1))),W=k((()=>(0,l._)("br",null,null,-1))),T=k((()=>(0,l._)("br",null,null,-1))),F=k((()=>(0,l._)("br",null,null,-1))),E=k((()=>(0,l._)("p",{id:"comment"},"//Assign new Customer object with customerName and phone values to customerObj - enforcing composition",-1))),L=k((()=>(0,l._)("br",null,null,-1))),B=k((()=>(0,l._)("br",null,null,-1))),H=k((()=>(0,l._)("pre",null,"import java.util.Date;\n\npublic class Reservation {\n\tprivate final int reservationID;\n\tprivate Customer customerObj;\n\tprivate Vehicle vehicleObj;\n\tprivate String contractStatus;\n\tprivate Date bookingDate;\n\tprivate Date releaseDate;\n\tprivate static int reservationCount=0;\n\t\n\tpublic Reservation(String customerName, long phone, Vehicle vehicleObj) {\n\t\tthis.customerObj = new Customer(customerName, phone);\n\t\tthis.vehicleObj = vehicleObj;\n\t\treservationCount++;\n\t\tthis.reservationID=reservationCount;\n\t}\n\n\tpublic Reservation(String customerName, String email, Vehicle vehicleObj){\n\t\tthis.customerObj = new Customer(customerName, email);\n\t\tthis.vehicleObj = vehicleObj;\n\t\treservationCount++;\n\t\tthis.reservationID=reservationCount;\n\t}\n    ",-1))),K=k((()=>(0,l._)("br",null,null,-1))),M=k((()=>(0,l._)("br",null,null,-1))),z=k((()=>(0,l._)("p",{id:"comment",style:{"font-weight":"bold"}},"//Here the second constructor using customerName and email is created similarly - enforcing composition",-1))),A=k((()=>(0,l._)("br",null,null,-1))),Z=k((()=>(0,l._)("br",null,null,-1))),P=k((()=>(0,l._)("pre",null,"import java.util.Date;\n\npublic class Reservation {\n\tprivate final int reservationID;\n\tprivate Customer customerObj;\n\tprivate Vehicle vehicleObj;\n\tprivate String contractStatus;\n\tprivate Date bookingDate;\n\tprivate Date releaseDate;\n\tprivate static int reservationCount=0;\n\t\n\tpublic Reservation(String customerName, long phone, Vehicle vehicleObj) {\n\t\tthis.customerObj = new Customer(customerName, phone);\n\t\tthis.vehicleObj = vehicleObj;\n\t\treservationCount++;\n\t\tthis.reservationID=reservationCount;\n\t}\n\n\tpublic Reservation(String customerName, String email, Vehicle vehicleObj){\n\t\tthis.customerObj = new Customer(customerName, email);\n\t\tthis.vehicleObj = vehicleObj;\n\t\treservationCount++;\n\t\tthis.reservationID=reservationCount;\n\t}\n\n  public Reservation(String customerName, String email, long phone, Vehicle vehicleObj){\n\t\tthis.customerObj = new Customer(customerName, email, phone);\n\t\tthis.vehicleObj = vehicleObj;\n\t\treservationCount++;\n\t\tthis.reservationID=reservationCount;\n\t}\n    ",-1))),J=k((()=>(0,l._)("br",null,null,-1))),$=k((()=>(0,l._)("br",null,null,-1))),G=k((()=>(0,l._)("p",{id:"comment",style:{"font-weight":"bold"}},"//Here the third constructor using customerName email and phone is created similarly - enforcing composition",-1))),Y=k((()=>(0,l._)("br",null,null,-1))),q=k((()=>(0,l._)("br",null,null,-1))),Q=k((()=>(0,l._)("pre",null,'import java.util.Date;\n\npublic class Reservation {\n\tprivate final int reservationID;\n\tprivate Customer customerObj;\n\tprivate Vehicle vehicleObj;\n\tprivate String contractStatus;\n\tprivate Date bookingDate;\n\tprivate Date releaseDate;\n\tprivate static int reservationCount=0;\n\t\n\n\tpublic Reservation(String customerName, long phone, Vehicle vehicleObj) {\n\t\tthis.customerObj = new Customer(customerName, phone);\n\t\tthis.vehicleObj = vehicleObj;\n\t\treservationCount++;\n\t\tthis.reservationID=reservationCount;\n\t}\n\n\tpublic Reservation(String customerName, String email, Vehicle vehicleObj){\n\t\tthis.customerObj = new Customer(customerName, email);\n\t\tthis.vehicleObj = vehicleObj;\n\t\treservationCount++;\n\t\tthis.reservationID=reservationCount;\n\t}\n\n\tpublic Reservation(String customerName, String email, long phone, Vehicle vehicleObj){\n\t\tthis.customerObj = new Customer(customerName, email, phone);\n\t\tthis.vehicleObj = vehicleObj;\n\t\treservationCount++;\n\t\tthis.reservationID=reservationCount;\n\t}\n\n\tpublic String getContractStatus() {\n\t\treturn contractStatus;\n\t}\n\n\tpublic void setContractStatus(String contractStatus) {\n\t\tthis.contractStatus = contractStatus;\n\t}\n\n\tpublic Date getBookingDate() {\n\t\treturn bookingDate;\n\t}\n\n\tpublic void setBookingDate(Date bookingDate) {\n\t\tthis.bookingDate = bookingDate;\n\t}\n\n\tpublic Date getReleaseDate() {\n\t\treturn releaseDate;\n\t}\n\t\n\tpublic String releaseContract(){\n\t\tif(bookingDate.compareTo(releaseDate)==0 && vehicleObj.getKeyStatus().compareTo("available")==0)\n\t\t\treturn vehicleObj.updateKeyStatus();\n\t\telse\n\t\t\treturn "Vehicle not avaible";\n\t}\n\n\tpublic Customer getCustomerObj() {\n\t\treturn customerObj;\n\t}\n\n\tpublic Vehicle getVehicleObj() {\n\t\treturn vehicleObj;\n\t}\n\n\tpublic int getReservationID() {\n\t\treturn reservationID;\n\t}\n\t\n}\n\n      ',-1))),X=k((()=>(0,l._)("br",null,null,-1))),ee={class:"column",style:{position:"relative",left:"5%",width:"fit-content"}},te={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},ne={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},le=k((()=>(0,l._)("br",null,null,-1))),ie=k((()=>(0,l._)("br",null,null,-1))),ae=k((()=>(0,l._)("br",null,null,-1))),oe=k((()=>(0,l._)("br",null,null,-1))),se=k((()=>(0,l._)("br",null,null,-1))),re=k((()=>(0,l._)("br",null,null,-1))),ue={style:{padding:"15px","line-height":"40px"}},ce=k((()=>(0,l._)("br",null,null,-1))),me=k((()=>(0,l._)("br",null,null,-1))),de=k((()=>(0,l._)("br",null,null,-1))),pe=k((()=>(0,l._)("br",null,null,-1))),be=k((()=>(0,l._)("br",null,null,-1))),he=k((()=>(0,l._)("br",null,null,-1))),ve={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},ge={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},_e=k((()=>(0,l._)("br",null,null,-1))),ke=k((()=>(0,l._)("br",null,null,-1))),we=k((()=>(0,l._)("br",null,null,-1))),ye=k((()=>(0,l._)("br",null,null,-1))),Ce=k((()=>(0,l._)("br",null,null,-1))),xe=k((()=>(0,l._)("br",null,null,-1))),Se={style:{padding:"15px","line-height":"40px"}},fe=k((()=>(0,l._)("br",null,null,-1))),je=k((()=>(0,l._)("br",null,null,-1))),Ue=k((()=>(0,l._)("br",null,null,-1))),De=k((()=>(0,l._)("br",null,null,-1))),Ve=k((()=>(0,l._)("br",null,null,-1))),Oe=k((()=>(0,l._)("br",null,null,-1))),Ne={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},Re={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},Ie=k((()=>(0,l._)("br",null,null,-1))),We=k((()=>(0,l._)("br",null,null,-1))),Te=k((()=>(0,l._)("br",null,null,-1))),Fe=k((()=>(0,l._)("br",null,null,-1))),Ee=k((()=>(0,l._)("br",null,null,-1))),Le=k((()=>(0,l._)("br",null,null,-1))),Be={style:{padding:"15px","line-height":"40px"}},He=k((()=>(0,l._)("br",null,null,-1))),Ke=k((()=>(0,l._)("br",null,null,-1))),Me=k((()=>(0,l._)("br",null,null,-1))),ze=k((()=>(0,l._)("br",null,null,-1))),Ae=k((()=>(0,l._)("br",null,null,-1))),Ze=k((()=>(0,l._)("br",null,null,-1))),Pe={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},Je={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},$e=k((()=>(0,l._)("br",null,null,-1))),Ge=k((()=>(0,l._)("br",null,null,-1))),Ye=k((()=>(0,l._)("br",null,null,-1))),qe=k((()=>(0,l._)("br",null,null,-1))),Qe=k((()=>(0,l._)("br",null,null,-1))),Xe=k((()=>(0,l._)("br",null,null,-1))),et={style:{padding:"15px","line-height":"40px"}},tt=k((()=>(0,l._)("br",null,null,-1))),nt=k((()=>(0,l._)("br",null,null,-1))),lt=k((()=>(0,l._)("br",null,null,-1))),it=k((()=>(0,l._)("br",null,null,-1))),at=k((()=>(0,l._)("br",null,null,-1))),ot=k((()=>(0,l._)("br",null,null,-1))),st={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},rt={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},ut=k((()=>(0,l._)("br",null,null,-1))),ct=k((()=>(0,l._)("br",null,null,-1))),mt=k((()=>(0,l._)("br",null,null,-1))),dt=k((()=>(0,l._)("br",null,null,-1))),pt=k((()=>(0,l._)("br",null,null,-1))),bt=k((()=>(0,l._)("br",null,null,-1))),ht={style:{padding:"15px","line-height":"40px"}},vt=k((()=>(0,l._)("br",null,null,-1))),gt=k((()=>(0,l._)("br",null,null,-1))),_t=k((()=>(0,l._)("br",null,null,-1))),kt=k((()=>(0,l._)("br",null,null,-1))),wt=k((()=>(0,l._)("br",null,null,-1))),yt=k((()=>(0,l._)("br",null,null,-1)));function Ct(e,t,n,o,s,r){const u=(0,l.up)("mark1"),c=(0,l.up)("mark0");return(0,l.wg)(),(0,l.iD)("main",w,[y,(0,l._)("div",C,[(0,l._)("div",x,[S,f,(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[0]})},[j,(0,l.Uk)("    public Reservation( "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"6",style:{width:"85px"},"onUpdate:modelValue":t[0]||(t[0]=t=>e.eight=t)},null,512),[[a.nr,e.eight]]),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"12",style:{width:"105px"},"onUpdate:modelValue":t[1]||(t[1]=t=>e.nine=t)},null,512),[[a.nr,e.nine]]),(0,l.Uk)(", "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":t[2]||(t[2]=t=>e.ten=t)},null,512),[[a.nr,e.ten]]),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"5",style:{width:"70px"},"onUpdate:modelValue":t[3]||(t[3]=t=>e.eleven=t)},null,512),[[a.nr,e.eleven]]),(0,l.Uk)(", "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"7",style:{width:"90px"},"onUpdate:modelValue":t[4]||(t[4]=t=>e.twelve=t)},null,512),[[a.nr,e.twelve]]),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"10",style:{width:"100px"},"onUpdate:modelValue":t[5]||(t[5]=t=>e.thirteen=t)},null,512),[[a.nr,e.thirteen]]),(0,l.Uk)(",) "),U,(0,l.Uk)("  "),D,V,(0,l.Uk)(" } "),O,(0,l._)("button",{class:"button-9",id:"btn4",onClick:t[6]||(t[6]=e=>r.validate_four())},(0,i.zw)(s.button_value),1)],4),(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[1]})},[N,(0,l.Uk)("        this.customerObj = "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"3",style:{width:"50px"},"onUpdate:modelValue":t[7]||(t[7]=t=>e.fourteen=t)},null,512),[[a.nr,e.fourteen]]),(0,l.Uk)(" Customer("),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"12",style:{width:"120px"},"onUpdate:modelValue":t[8]||(t[8]=t=>e.fifteen=t)},null,512),[[a.nr,e.fifteen]]),(0,l.Uk)(", "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"5",style:{width:"70px"},"onUpdate:modelValue":t[9]||(t[9]=t=>e.sixteen=t)},null,512),[[a.nr,e.sixteen]]),(0,l.Uk)("); "),R,(0,l.Uk)("       this.vehicleObj = vehicleObj; "),I,(0,l.Uk)("       reservationCount++; "),W,(0,l.Uk)("       this.reservationID=reservationCount;        "),T,(0,l.Uk)("   "),F,(0,l.Uk)(" } "),E,L,(0,l.Uk)(" } "),B,(0,l._)("button",{class:"button-9",id:"btn5",onClick:t[10]||(t[10]=e=>r.validate_five())},(0,i.zw)(s.button_value),1)],4),(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[2]})},[H,K,(0,l.Uk)("   "),M,(0,l.Uk)(" } "),z,A,(0,l.Uk)(" } "),Z,(0,l._)("button",{class:"button-9",id:"btn6",onClick:t[11]||(t[11]=e=>r.validate_six())},(0,i.zw)(s.button_value),1)],4),(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[3]})},[P,J,(0,l.Uk)("   "),$,(0,l.Uk)(" } "),G,Y,(0,l.Uk)(" } "),q,(0,l._)("button",{class:"button-9",id:"btn7",onClick:t[12]||(t[12]=e=>r.validate_seven())},(0,i.zw)(s.button_value),1)],4),(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[4]})},[Q,(0,l.Uk)(),X],4)]),(0,l._)("div",ee,[(0,l._)("div",{style:(0,i.j5)([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:s.display[0]}])},[(0,l._)("div",te,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Class Reservation")])),_:1})]),(0,l._)("div",ne,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-reservationID: int ")])),_:1}),le,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-customerObj: Customer")])),_:1}),ie,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-vehicleObj: Vehicle")])),_:1}),ae,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-contractStatus: String")])),_:1}),oe,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+booking Date: Date")])),_:1}),se,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-releaseDate: Date")])),_:1}),re,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-reservationCount: int")])),_:1})]),(0,l._)("div",ue,[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+Reservation(String customerName, long phone, Vehicle vehicleObj)")])),_:1}),ce,(0,l.Uk)(" +Reservation(String customerName, String email, Vehicle vehicleObj) "),me,(0,l.Uk)(" +Reservation(String customerName, String email, long phone, Vehicle vehicleObj) "),de,(0,l.Uk)(" +setContractStatus(String contractStatus): void "),pe,(0,l.Uk)(" +getContractStatus(): String "),be,(0,l.Uk)(" +releaseContract(): String "),he,(0,l.Uk)(" +getReleaseDate(): Date ")])],4),(0,l._)("div",{style:(0,i.j5)([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:s.display[1]}])},[(0,l._)("div",ve,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Class Reservation")])),_:1})]),(0,l._)("div",ge,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-reservationID: int ")])),_:1}),_e,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-customerObj: Customer")])),_:1}),ke,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-vehicleObj: Vehicle")])),_:1}),we,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-contractStatus: String")])),_:1}),ye,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+booking Date: Date")])),_:1}),Ce,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-releaseDate: Date")])),_:1}),xe,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-reservationCount: int")])),_:1})]),(0,l._)("div",Se,[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+Reservation(String customerName, long phone, Vehicle vehicleObj)")])),_:1}),fe,(0,l.Uk)(" +Reservation(String customerName, String email, Vehicle vehicleObj) "),je,(0,l.Uk)(" +Reservation(String customerName, String email, long phone, Vehicle vehicleObj) "),Ue,(0,l.Uk)(" +setContractStatus(String contractStatus): void "),De,(0,l.Uk)(" +getContractStatus(): String "),Ve,(0,l.Uk)(" +releaseContract(): String "),Oe,(0,l.Uk)(" +getReleaseDate(): Date ")])],4),(0,l._)("div",{style:(0,i.j5)([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:s.display[2]}])},[(0,l._)("div",Ne,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Class Reservation")])),_:1})]),(0,l._)("div",Re,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-reservationID: int ")])),_:1}),Ie,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-customerObj: Customer")])),_:1}),We,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-vehicleObj: Vehicle")])),_:1}),Te,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-contractStatus: String")])),_:1}),Fe,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+booking Date: Date")])),_:1}),Ee,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-releaseDate: Date")])),_:1}),Le,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-reservationCount: int")])),_:1})]),(0,l._)("div",Be,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+Reservation(String customerName, long phone, Vehicle vehicleObj)")])),_:1}),He,(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+Reservation(String customerName, String email, Vehicle vehicleObj)")])),_:1}),Ke,(0,l.Uk)(" +Reservation(String customerName, String email, long phone, Vehicle vehicleObj) "),Me,(0,l.Uk)(" +setContractStatus(String contractStatus): void "),ze,(0,l.Uk)(" +getContractStatus(): String "),Ae,(0,l.Uk)(" +releaseContract(): String "),Ze,(0,l.Uk)(" +getReleaseDate(): Date ")])],4),(0,l._)("div",{style:(0,i.j5)([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:s.display[3]}])},[(0,l._)("div",Pe,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Class Reservation")])),_:1})]),(0,l._)("div",Je,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-reservationID: int ")])),_:1}),$e,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-customerObj: Customer")])),_:1}),Ge,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-vehicleObj: Vehicle")])),_:1}),Ye,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-contractStatus: String")])),_:1}),qe,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+booking Date: Date")])),_:1}),Qe,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-releaseDate: Date")])),_:1}),Xe,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-reservationCount: int")])),_:1})]),(0,l._)("div",et,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+Reservation(String customerName, long phone, Vehicle vehicleObj)")])),_:1}),tt,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+Reservation(String customerName, String email, Vehicle vehicleObj)")])),_:1}),nt,(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+Reservation(String customerName, String email, long phone, Vehicle vehicleObj)")])),_:1}),lt,(0,l.Uk)(" +setContractStatus(String contractStatus): void "),it,(0,l.Uk)(" +getContractStatus(): String "),at,(0,l.Uk)(" +releaseContract(): String "),ot,(0,l.Uk)(" +getReleaseDate(): Date ")])],4),(0,l._)("div",{style:(0,i.j5)([{"margin-left":"15%",height:"fit-content",width:"400px",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:s.display[4]}])},[(0,l._)("div",st,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Class Reservation")])),_:1})]),(0,l._)("div",rt,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-reservationID: int ")])),_:1}),ut,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-customerObj: Customer")])),_:1}),ct,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-vehicleObj: Vehicle")])),_:1}),mt,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-contractStatus: String")])),_:1}),dt,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+booking Date: Date")])),_:1}),pt,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-releaseDate: Date")])),_:1}),bt,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("-reservationCount: int")])),_:1})]),(0,l._)("div",ht,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+Reservation(String customerName, long phone, Vehicle vehicleObj)")])),_:1}),vt,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+Reservation(String customerName, String email, Vehicle vehicleObj)")])),_:1}),gt,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+Reservation(String customerName, String email, long phone, Vehicle vehicleObj)")])),_:1}),_t,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+setContractStatus(String contractStatus): void")])),_:1}),kt,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+getContractStatus(): String")])),_:1}),wt,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+releaseContract(): String")])),_:1}),yt,(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("+getReleaseDate(): Date")])),_:1})])],4)])])])}var xt={methods:{correct(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},validate_four(){if("String"==this.eight&&"customerName"==this.nine&&"long"==this.ten&&"phone"==this.eleven&&"Vehicle"==this.twelve&&"vehicleObj"==this.thirteen){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3),this.display[0]="none",this.display[1]="block"}else this.incorrect()},validate_five(){if("new"==this.fourteen&&"customerName"==this.fifteen&&"phone"==this.sixteen){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3),this.display[1]="none",this.display[2]="block"}else this.incorrect()},validate_six(){this.button_value="Next",this.display[2]="none",this.display[3]="block"},validate_seven(){this.button_value="Next",this.display[3]="none",this.display[4]="block",this.$emit("reservationComplete",!0)}},data(){return{id:"container",class:"wrapper",button_value:"Next",button_text:"Incorrect. Try again",button_text_right:"Correct. Next",correct:!1,display:["block","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}}};const St=(0,h.Z)(xt,[["render",Ct],["__scopeId","data-v-3056c908"]]);var ft=St;const jt=e=>((0,l.dD)("data-v-77bc0ba9"),e=e(),(0,l.Cn)(),e),Ut={class:"app"},Dt=jt((()=>(0,l._)("div",{class:"codebox"},[(0,l._)("pre",null,'\npublic class Vehicle {\n\tprivate final int regNum;\n\tprivate String keyStatus;\n\t\n\tpublic Vehicle(int regNum)\n\t{\n\t\tthis.regNum=regNum;\n\t\tthis.keyStatus="available";\n\t}\n\t\n\tpublic String updateKeyStatus()\n\t{\n\t\tthis.keyStatus="not available";\n\t\treturn this.keyStatus;\n\t}\n\n\tpublic String getKeyStatus() {\n\t\treturn keyStatus;\n\t}\n\n\tpublic void setKeyStatus(String keyStatus) {\n\t\tthis.keyStatus = keyStatus;\n\t}\n\n\tpublic int getRegNum() {\n\t\treturn regNum;\n\t}\n\t\n}\n\n    ')],-1))),Vt=[Dt];function Ot(e,t){return(0,l.wg)(),(0,l.iD)("main",Ut,Vt)}const Nt={},Rt=(0,h.Z)(Nt,[["render",Ot],["__scopeId","data-v-77bc0ba9"]]);var It=Rt;const Wt={class:"app"},Tt=(0,l.uE)('<div class="box" data-v-209e7c00><h1 data-v-209e7c00>Instructions</h1><ol data-v-209e7c00><li class="arrow" data-v-209e7c00>In this section of the experiment, we&#39;ll be writing code to understand composition.</li><li class="arrow" data-v-209e7c00>Customer, Reservation and Vehicle classes have been implemented and are to be referred to.</li><li class="arrow" data-v-209e7c00>To combine the different classes as shown in the diagram, we will be creating a Reservation System class.</li><li class="arrow" data-v-209e7c00>Switch between instructions, classes and the class diagram by clicking on the respective elements in the top navigation bar.</li><li class="arrow" data-v-209e7c00>Once you&#39;re done programming the Reservation and Reservation System classes, a&#39;Next&#39; button will appear at the bottom left corner.</li></ol></div>',1),Ft=[Tt];function Et(e,t){return(0,l.wg)(),(0,l.iD)("main",Wt,Ft)}const Lt={},Bt=(0,h.Z)(Lt,[["render",Et],["__scopeId","data-v-209e7c00"]]);var Ht=Bt;const Kt=e=>((0,l.dD)("data-v-61d2e124"),e=e(),(0,l.Cn)(),e),Mt={class:"app"},zt=Kt((()=>(0,l._)("div",{id:"snackbar"},"Some text some message..",-1))),At=Kt((()=>(0,l._)("div",{class:"column",style:{position:"sticky",top:"20%",left:"60%",float:"right"}},[(0,l._)("div",{class:"column"},[(0,l._)("div",{class:"codebox"},[(0,l._)("h5",null,"Composition: "),(0,l._)("p",null,"Write a demo class that creates a vehicle object with a registration number. Create a reservation object that does a reservation of the vehicle for current date by providing customerName, email and/or phone number. Later set the city as Coimbatore. Also release the vehicle.")])])],-1))),Zt={class:"row"},Pt={class:"column"},Jt=Kt((()=>(0,l._)("h1",{style:{padding:"25px","padding-bottom":"0px"}},"Enter your code here .",-1))),$t=Kt((()=>(0,l._)("p",{style:{padding:"25px","padding-top":"0px"}},"Follow instructions provided in the comments",-1))),Gt=Kt((()=>(0,l._)("pre",null,"import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {",-1))),Yt=Kt((()=>(0,l._)("p",{id:"comment"},"//Create a Vehicle object with regNum 5678",-1))),qt=Kt((()=>(0,l._)("br",null,null,-1))),Qt=Kt((()=>(0,l._)("br",null,null,-1))),Xt=Kt((()=>(0,l._)("pre",null,"import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n    public static void main(String[] args) {\n      Vehicle vobj = new Vehicle(5678);\n                ",-1))),en=Kt((()=>(0,l._)("br",null,null,-1))),tn=Kt((()=>(0,l._)("p",{id:"comment"},'//Create a new Reservation object "rObjComposition" and pass vobj',-1))),nn=Kt((()=>(0,l._)("br",null,null,-1))),ln=Kt((()=>(0,l._)("br",null,null,-1))),an=Kt((()=>(0,l._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n\tpublic static void main(String[] args) {\n\t\tVehicle vobj = new Vehicle(5678);\n\t\tReservation rObjComposition = new Reservation("JKL", 999999999, vobj);\n      \n      ',-1))),on=Kt((()=>(0,l._)("br",null,null,-1))),sn=Kt((()=>(0,l._)("br",null,null,-1))),rn=Kt((()=>(0,l._)("p",{id:"comment"},'//Get the customer object and set the City to "Coimbatore"',-1))),un=Kt((()=>(0,l._)("br",null,null,-1))),cn=Kt((()=>(0,l._)("br",null,null,-1))),mn=Kt((()=>(0,l._)("br",null,null,-1))),dn=Kt((()=>(0,l._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n\tpublic static void main(String[] args) {\n\t\tVehicle vobj = new Vehicle(5678);\n\t\tReservation rObjComposition = new Reservation("JKL", 999999999, vobj);\n\t\trObjComposition.getCustomerObj().setCity("Coimbatore");\n      ',-1))),pn=Kt((()=>(0,l._)("br",null,null,-1))),bn=Kt((()=>(0,l._)("p",{id:"comment"},"//Call the method to set a booking date as new Date()",-1))),hn=Kt((()=>(0,l._)("br",null,null,-1))),vn=Kt((()=>(0,l._)("br",null,null,-1))),gn=Kt((()=>(0,l._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n\tpublic static void main(String[] args) {\n\t\tVehicle vobj = new Vehicle(5678);\n\t\tReservation rObjComposition = new Reservation("JKL", 999999999, vobj);\n\t\trObjComposition.getCustomerObj().setCity("Coimbatore");\n\t\trObjComposition.setBookingDate(new Date());\n      ',-1))),_n=Kt((()=>(0,l._)("br",null,null,-1))),kn=Kt((()=>(0,l._)("br",null,null,-1))),wn=Kt((()=>(0,l._)("p",{id:"comment"},"//Get the Vehicle Object and call the method to update key status",-1))),yn=Kt((()=>(0,l._)("br",null,null,-1))),Cn=Kt((()=>(0,l._)("br",null,null,-1))),xn=Kt((()=>(0,l._)("pre",null,'import java.util.Scanner;\nimport java.util.Date;\n\npublic class TestDriver {\n\n\tpublic static void main(String[] args) {\n\t\tVehicle vobj = new Vehicle(5678);\n\t\tReservation rObjComposition = new Reservation("JKL", 999999999, vobj);\n\t\trObjComposition.getCustomerObj().setCity("Coimbatore");\n\t\trObjComposition.setBookingDate(new Date());\n\t\trObjComposition.getVehicleObj().updateKeyStatus();\n\t\t}\n\t}\n      ',-1))),Sn=[xn];function fn(e,t,n,o,s,r){return(0,l.wg)(),(0,l.iD)("main",Mt,[zt,At,(0,l._)("div",Zt,[(0,l._)("div",Pt,[Jt,$t,(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[0]})},[Gt,(0,l.Uk)("  "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"7",style:{width:"80px"},"onUpdate:modelValue":t[0]||(t[0]=t=>e.one=t)},null,512),[[a.nr,e.one]]),(0,l.Uk)(" vobj = new Vehicle( "),(0,l.wy)((0,l._)("input",{spellcheck:"false",id:"two",maxlength:"4",style:{width:"60px"},"onUpdate:modelValue":t[1]||(t[1]=t=>e.two=t)},null,512),[[a.nr,e.two]]),(0,l.Uk)(") "),Yt,qt,(0,l.Uk)(" } "),Qt,(0,l._)("button",{class:"button-9",id:"btn1",onClick:t[2]||(t[2]=e=>r.validate_one())},(0,i.zw)(s.button_value),1)],4),(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[1]})},[Xt,en,(0,l.Uk)("    "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"11",style:{width:"100px"},"onUpdate:modelValue":t[3]||(t[3]=t=>e.three=t)},null,512),[[a.nr,e.three]]),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"15",style:{width:"130px"},"onUpdate:modelValue":t[4]||(t[4]=t=>e.four=t)},null,512),[[a.nr,e.four]]),(0,l.Uk)(' = new Reservation("JKL", 999999999, '),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"4",style:{width:"50px"},"onUpdate:modelValue":t[5]||(t[5]=t=>e.five=t)},null,512),[[a.nr,e.five]]),(0,l.Uk)("); "),tn,nn,(0,l.Uk)(" } "),ln,(0,l._)("button",{class:"button-9",id:"btn2",onClick:t[6]||(t[6]=e=>r.validate_two())},(0,i.zw)(s.button_value),1)],4),(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[2]})},[an,on,(0,l.Uk)("   rObjComposition. "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"14",style:{width:"125px"},"onUpdate:modelValue":t[7]||(t[7]=t=>e.six=t)},null,512),[[a.nr,e.six]]),(0,l.Uk)("(). "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"7",style:{width:"70px"},"onUpdate:modelValue":t[8]||(t[8]=t=>e.seven=t)},null,512),[[a.nr,e.seven]]),(0,l.Uk)('("Coimbatore"); '),sn,(0,l.Uk)("  "),rn,un,(0,l.Uk)(" } "),cn,(0,l.Uk)(" } "),mn,(0,l._)("button",{class:"button-9",id:"btn3",onClick:t[9]||(t[9]=e=>r.validate_three())},(0,i.zw)(s.button_value),1)],4),(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[3]})},[dn,(0,l.Uk)("     rObjComposition. "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"14",style:{width:"130px"},"onUpdate:modelValue":t[10]||(t[10]=t=>e.eight=t)},null,512),[[a.nr,e.eight]]),(0,l.Uk)("( "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"3",style:{width:"50px"},"onUpdate:modelValue":t[11]||(t[11]=t=>e.nine=t)},null,512),[[a.nr,e.nine]]),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"6",style:{width:"65px"},"onUpdate:modelValue":t[12]||(t[12]=t=>e.ten=t)},null,512),[[a.nr,e.ten]]),(0,l.Uk)("); "),pn,(0,l.Uk)(" } "),bn,hn,(0,l.Uk)(" } "),vn,(0,l._)("button",{class:"button-9",id:"btn4",onClick:t[13]||(t[13]=e=>r.validate_four())},(0,i.zw)(s.button_value),1)],4),(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[4]})},[gn,(0,l.Uk)("    rObjComposition. "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"13",style:{width:"120px"},"onUpdate:modelValue":t[14]||(t[14]=t=>e.eleven=t)},null,512),[[a.nr,e.eleven]]),(0,l.Uk)("(). "),(0,l.wy)((0,l._)("input",{spellcheck:"false",maxlength:"15",style:{width:"140px"},"onUpdate:modelValue":t[15]||(t[15]=t=>e.twelve=t)},null,512),[[a.nr,e.twelve]]),(0,l.Uk)("(); "),_n,(0,l.Uk)("   "),kn,(0,l.Uk)(" } "),wn,yn,(0,l.Uk)(" } "),Cn,(0,l._)("button",{class:"button-9",id:"btn5",onClick:t[16]||(t[16]=e=>r.validate_five())},(0,i.zw)(s.button_value),1)],4),(0,l._)("div",{class:"codebox",id:"codebox",style:(0,i.j5)({display:s.display[5]})},Sn,4)])])])}var jn={methods:{correct(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},incorrect(){var e=document.getElementById("snackbar");e.innerHTML="Inorrect. Try again",e.style.backgroundColor="red",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},validate_one(){if("Vehicle"==this.one&&"5678"==this.two){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3),this.display[0]="none",this.display[1]="inherit"}else this.incorrect()},validate_two(){if("Reservation"==this.three&&"rObjComposition"==this.four&&"vobj"==this.five){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3),this.display[1]="none",this.display[2]="inherit"}else this.incorrect()},validate_three(){if("getCustomerObj"==this.six&&"setCity"==this.seven){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3),this.display[2]="none",this.display[3]="inherit"}else this.incorrect()},validate_four(){if("setBookingDate"==this.eight&&"new"==this.nine&&"Date()"==this.ten){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3),this.display[3]="none",this.display[4]="inherit"}else this.incorrect()},validate_five(){if("getVehicleObj"==this.eleven&&"updateKeyStatus"==this.twelve){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3),this.display[4]="none",this.display[5]="inherit",this.$emit("reservationSystemComplete",!0)}else this.incorrect()}},data(){return{id:"container",class:"wrapper",button_value:"Next",button_text:"Incorrect. Try again",button_text_right:"Correct. Next",correct:!1,display:["inherit","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}}};const Un=(0,h.Z)(jn,[["render",fn],["__scopeId","data-v-61d2e124"]]);var Dn=Un,Vn=n.p+"img/compositionans.f898c333.png";const On=e=>((0,l.dD)("data-v-3b122039"),e=e(),(0,l.Cn)(),e),Nn={class:"app"},Rn=On((()=>(0,l._)("div",{class:"codebox",style:{"align-items":"center","justify-content":"center",display:"flex"}},[(0,l._)("img",{src:Vn})],-1))),In=[Rn];function Wn(e,t){return(0,l.wg)(),(0,l.iD)("main",Nn,In)}const Tn={},Fn=(0,h.Z)(Tn,[["render",Wn],["__scopeId","data-v-3b122039"]]);var En=Fn,Ln={components:{CustomerView2:_,ReservationView2:ft,VehicleView2:It,InstructionsView2:Ht,ReservationSystemView2:Dn,ClassView2:En},data(){return{componentSelect:"InstructionsView2",reservation_complete:!1,reservation_system_complete:!1}},methods:{reservationCallback(e){console.log("Event reservation triggered",e),this.reservation_complete=!0,this.componentSelect="VehicleView2"},reservationSystemCallBack(e){console.log("Event reservation system triggered",e),this.reservation_system_complete=!0,this.componentSelect="ClassView2"}}};const Bn=(0,h.Z)(Ln,[["render",u]]);var Hn=Bn}}]);
//# sourceMappingURL=70.ec503fb7.js.map