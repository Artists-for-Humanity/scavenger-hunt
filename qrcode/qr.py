# Importing library
import qrcode
 
# Data to be encoded
data = 'http://192.168.5.138:3000/pages/clue10'
 
# Encoding data using make() function
img = qrcode.make(data)
 
# Saving as an image file
img.save('Clue10-local.png') 