import cv2
import pyzbar.pyzbar as pyzbar
import requests

URL = "http://localhost:5000/api/applyQR"

# define a video capture object
vid = cv2.VideoCapture(0)
def sendRequest(input):
    print(input)
    requests.post(url = URL, json= {"qr": input})

isDone = False
cv2.namedWindow("Sturdy", cv2.WINDOW_NORMAL)
cv2.resizeWindow("Sturdy", 400, 400)
while(isDone == False):
    ret, frame = vid.read()
    
    cv2.imshow("Sturdy", cv2.flip(frame,1))
    decodedObjects = pyzbar.decode(frame)
    for obj in decodedObjects:
        text = obj.data.decode("utf-8")
        if(len(text) == 128):
            sendRequest(text)
            isDone = True
      
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
  
vid.release()
cv2.destroyAllWindows()