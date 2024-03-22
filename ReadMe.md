# Comment Deletion Automation Script

This repository contains a JavaScript automation script designed to facilitate the batch deletion of comments and replies from a user's Youtube account. 

To use this script, follow the steps below:

1. **Open Developer Tools**: 
   - In Chrome or Firefox, navigate to the web page where you want to delete comments.
   - Press `F12` or right-click anywhere on the page and select "Inspect" to open the Developer Tools.

2. **Console Tab**: 
   - Go to the "Console" tab within the Developer Tools.

3. **Allow Pasting**: 
   - For security reasons, browsers require you to enable script pasting by typing "allow pasting" into the console if it's your first time running a custom script. This needs to be done only once per browser session.

4. **Running the Script**: 
   - Copy the entire script from this repository.
   - Paste it into the console log and press `Enter` to execute.
   - You can modify this Hit(Deletion) by changing the if (counter >= 200) and  while (counter < 200) {
    if (counter >= 200) to your desired deletion number. By default script will stop running after 200 Hits(Deletions)
   - After executing a deletion script, the browser may continue to display "Deleting" even after completion. Reloading the page prematurely could interrupt the execution of subsequent commands, such as a count function set to execute 200 times.
![YoutubeDeleteVideo](https://media.giphy.com/media/RYSaM8wF5aMpkTlGzi/giphy.gif)


## Limitations

- **Browser Compatibility**: The script has been tested and confirmed to work in Google Chrome and Mozilla Firefox as of the last update on February 26, 2024.
- **Web Page Compatibility**: Ensure that the script's selectors match the HTML structure of the page. The script is designed for specific elements and may need adjustment for different sites or future page updates.

## Contribution

- Feedback and contributions to enhance the script or extend its compatibility are welcome. If you have any issues or suggestions for improvement, please feel free to open an issue or submit a pull request.
- Shootouts to RubenPonce. This code is a modified version of this user's script. 

## Disclaimer

This script is provided "as is" for educational or administrative purposes. Users should ensure they comply with the terms of service of the respective website and use the script responsibly.

