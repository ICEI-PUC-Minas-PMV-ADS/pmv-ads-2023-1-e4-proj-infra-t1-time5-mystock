import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
display: "flex",
flexDirection: "column",
alignItems: "center",
width: "100%",
height: "100%",
maxWidth: 1100,
margin: "0 auto",
},
alignText: {
display: "flex",
justifyContent: "center",
alignItems: "center",
flexDirection: "column",
marginTop: -30,
padding: 10,
},
cardsWrapper: {
width: "100%",
display: "flex",
flexWrap: "wrap",
padding: 10,
gap: 10,
overflowY: "auto",
height: "100% - 140",
marginTop: 40,
justifyContent: "center",
},
scrollBar: {
width: 8,
},
scrollBarTrack: {
backgroundColor: "rgba(0, 0, 0, 0.1)",
borderRadius: 8,
position: "absolute",
},
scrollBarThumb: {
backgroundColor: "rgba(0, 0, 0, 0.2)",
borderRadius: 8,
":hover": {
backgroundColor: "#1bbbff",
},
},
})