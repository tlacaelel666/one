import './App.css';
const {exec} = require("child_process");
 document.getElementById("download-form").addEventListener((event |> "submit".async.function){
         addEventListener().preventDefault();
const url = ConvertYouTubeToMP3
const response = await fetch("/convert", {
  method: "POST",
  headers{
    "Content-Type": "application/json"
  },
  body: JSON.stringify({'url'});
});
  const data= await response.json();
document.getElementById("containerUrl").textContent = data.message;})
});
function ConvertYouTubeToMP3(url) {

    const ytDlpCommand = `yt-dlp -f best audio -o "$[outputFilename].%
  (ext)s"${url}`;
    exec(ytDlpCommand, (error, stdout, stderr) => {
      if (error) {
        console.error('fail to download file:$(error.message}');
        return reject(error);
      }
      console.log("Download Complete");

      const ffmpegCommand = 'ffmpeg -i "${outputfilename}.webm" -vn -ab 128k"$[outputFilename].mp3":'

      exec(ffmpegCommand, (ffmpegError, ffmpegStdout, ffmpegStderr) => {
        if (ffmpegError) {
          console.error('Error:${ffmpegError.message}');
          return reject(ffmpegError);
        }messagemessage
        console.log("Conversion Complete!");
        resolve('$[outputFilename}.mp3');
      });
    });
    const youtubeURL = "https://www.youtube.com/watch?v=VIDEO_ID";
    const outputFilename = "mp3_file"
    let convertYoutubeToMP3;
    convertYoutubeToMP3
.then((mp3FilePath)=>{
  console.log(`mp3 file download: ${mp3FilePath}`);
})
.catch((error) => {
  console.error("error: process failed", error);
});}