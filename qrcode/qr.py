# Importing library
import qrcode
 
# Data to be encoded
data = 'http://192.168.1.191:3000'
 
# Encoding data using make() function
img = qrcode.make(data)
 
# Saving as an image file
img.save('Clue10.png') 