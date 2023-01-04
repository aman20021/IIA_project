#Source - https://www.digitalocean.com/community/tutorials/how-to-use-a-postgresql-database-in-a-flask-application
import os
import psycopg2
from flask import Flask, render_template,request, url_for, redirect, flash
import time
import flask
import json

app = Flask(__name__)
#app = flask.Flask('my app')
app.secret_key = "super secret key"

def get_db_connection(db):
    conn = psycopg2.connect(host='34.171.198.34',
                            database=db,
                            user='postgres',
                            password='/Za~`qQE**pIGf\g')
    return conn

def run_query(query1,query2):
    db1 = ['agg1s1','agg1s2','agg1s3','agg1s4','agg1s5']
    db2 = ['agg2s1','agg2s2','agg2s3','agg2s4','agg2s5']
    sc = []
    for i in db1:
        conn = get_db_connection(i)
        cur = conn.cursor()
        cur.execute(query1)
        schools = cur.fetchall()
        sc.extend(schools)
        #print(schools)
        cur.close()
        conn.close()
    for i in db2:
        conn = get_db_connection(i)
        cur = conn.cursor()
        cur.execute(query2)
        schools = cur.fetchall()
        sc.extend(schools)
        #print(schools)
        cur.close()
        conn.close()
    return sc

@app.route('/')
def index():
    ''' Source - https://dba.stackexchange.com/questions/252017/psycopg2-connection-with-multihosts'''
    sc = run_query('SELECT * FROM school;','SELECT * FROM school;')
    #print(sc)
    return render_template('index.html', schools=sc)

@app.route('/get', methods=["GET","POST"])
def get_bot_response():
    userText = request.args.get('msg')
    #execute the query to get the information and display on frontend
    response = 'working on the query'
    if (userText == "hello"):
        return "Hello there!"
    elif (userText == "goodbye"):
        return "Talk to you later!"
    else:
        #print(('Total Addmission for school for year' in userText))
        if ('Total Addmission for school for year' in userText):
            t = (userText).split(" ")
            print(t)
            query1 = "Select school_id , (select school_name from school) as school_name,no_of_students_intake from class where class_id='"+t[-1]+"';"
            query2 = "Select school_id , (select school_name from school) as school_name, no_of_student_intake from class where class_id='"+t[-1]+"';"
            sc = run_query(query1,query2)
            print(sc)
            response = sc
        elif (userText == 'Total teachers count in each school'):
            query1 = "Select school_id, (select school_name from school) as school_name, total_teachers from teachers;"
            query2 = "Select school_id, (select school_name from school) as school_name, total_teachers from school;"
            sc = run_query(query1,query2)
            print(sc)
            response = sc
        elif (userText == 'Location of the schools'):
            query1 = "Select school_id, school_name,address from school;"
            query2 = "Select school_id, school_name,address from school;"
            sc = run_query(query1,query2)
            print(sc)
            response = sc
        elif ('Ranking of school' in userText):
            t = userText.split(" ")
            c = t.index("class")+1
            y = t.index("year")+1
            print(t,c,y)
            #class = 
            query1 = "Select school_id,class_id, (select school_name from school) as school_name,board_pass_percentage from board_percentage where class_id='"+t[c]+"' and year='"+t[y]+"';"
            query2 = "Select school_id,class_id, (select school_name from school) as school_name,board_percentage from board_percentage where class_id='"+t[c]+"' and year='"+t[y]+"';"
            print(query1,query2)
            sc = run_query(query1,query2)
            #print(sc, "ranking list")
            # here the data will be received from multiple database and will be appended in the sc list
            # use -> https://stackoverflow.com/questions/14466068/sort-a-list-of-tuples-by-second-value-reverse-true-and-then-by-key-reverse-fal
            r1 = sc[:5]
            r1 = sorted(r1,key=lambda x:(-x[3],x[2],x[1],x[0]))
            r2 = sc[5:]
            r2 = sorted(r2,key=lambda x:(-x[3],x[2],x[1],x[0]))
            print(r1,r2)
            r1.extend(r2)
            response = r1
        else:
           response = 'Please enter correct query'
    
    #return render_template('index.html')
    return response

#@app.route('/admission')
#def admission():
   #print(request.args['data'])
#   return render_template('admission.html')#,data=data)

if __name__ == "__main__":
    app.run('0.0.0.0',5000)
