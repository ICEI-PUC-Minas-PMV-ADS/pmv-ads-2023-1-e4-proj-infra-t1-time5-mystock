import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
cardsWrapper: {
width: "100%",
display: "flex",
flexWrap: "wrap",
padding: 10,
gap: "1%",
overflowY: "auto",
height: "calc(100% - 140px)",
},
cardSubcategorys: {
display: "flex",
width: "100%",
height: "fit-content",
alignItems: "center",
flexDirection: "column",
borderWidth: 1,
borderColor: "#fff3",
borderRadius: 5,
cursor: "pointer",
},
titleCategoryCard: {
width: "100%",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
height: 100,
padding: 20,
},
icon: {
fontSize: 25,
color: "#fff",
},
h2: {
color: "#fff",
fontWeight: "500",
},
modalCategoryCard: {
display: "flex",
maxHeight: 300,
height: "100%",
overflow: "auto",
width: "100%",
flexDirection: "column",
gap: 15,
display: (props) => (props.display ? "flex" : "none"),
padding: "0px 20px 20px 20px",
},
h3: {
fontWeight: "300",
color: "#fff",
fontSize: 16,
},
contentCards: {
display: "flex",
width: "100%",
height: 300,
overflowY: "auto",
marginTop: 20,
gap: 10,
flexDirection: "column",
},
buttonBack: {
display: "none",
cursor: "pointer",
},
buttonIcon: {
fontSize: 25,
color: "#fff",
},
"@media (max-width: 700px)": {
buttonBack: {
display: "flex",
},
},
});