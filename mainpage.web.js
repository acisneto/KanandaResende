import wixData from 'wix-data';
import wixUsers from 'wix-users';

let buttons = $w('#button5, #button6, #button7')
buttons.hide()

let currentUsr = wixUsers.currentUser.id.toString()
//console.log(currentUsr)

//SETS LINK FOR PRODUCT 1
wixData.get("Members/Badges", "TABLE_BADGE_ID") 
  .then((item) => {
    let mbadge = item.members
    //console.log(mbadge.type);
    let ifincludes = mbadge.indexOf(currentUsr)
    //console.log(ifincludes)
    if (ifincludes > -1){
        $w('#button5').link = "PRIVATE_URL"
    }
  })
  .catch((err) => {
    console.log(err);
  });

//SETS LINK FOR PRODUCT 2
wixData.get("Members/Badges", "TABLE_BADGE_ID") 
  .then((item) => {
    let mbadge2 = item.members
    //console.log(mbadge2.type);
    let ifincludes2 = mbadge2.indexOf(currentUsr)
    //console.log(ifincludes)
    if (ifincludes2 > -1){
        $w('#button6').link = "PRIVATE_URL"
    }
  })
  .catch((err) => {
    console.log(err);
  });


$w.onReady(()=>{
    buttons.show()
})
