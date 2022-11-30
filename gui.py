import tkinter as tk
from tkinter import Tk, Text
from tkinter import *
import os
from pathlib import Path

startText = 'Welcome to the SPSS software.\nPress "Generate" to generate the CSS.'
startFile = 'gen.bat'
title = 'SPSS'
icon = 'SPSS.ico'
background = 'darkgray'
mainImage = './SPSS.PNG'
fontStyle = 'Arial'
textSize = 25
buttonString = 'Generate'
def generate():
    os.chdir(Path().absolute())
    os.startfile(startFile)
win = tk.Tk()
win.title(title)
#win.resizable(False, False)
win.iconbitmap(icon)
win.configure(bg = background)

image = PhotoImage(file = mainImage)
img = Label(win, image=image)
img.pack()
Label(win.master,
              text=startText,
  
              # Changing font-size here
              font=(fontStyle, textSize),

              bg = background
              ).pack()
#can = Canvas(win, bg = 'red', height=100, width=100)
#text.place(relx=0.5, rely=0.5, anchor=CENTER)
button = tk.Button(win, text = buttonString, width=15, height=5, background='lightblue', command=generate)
button.pack()
print('Successfully launched the software.')
win.mainloop()