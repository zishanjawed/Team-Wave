# Teamwave Project
Application over StackOverflowAPI for searching questions in StackOverflow along with paging
## Installation

### Prerequisites

#### 1. Install Python
Install ```python-3.7.2``` and ```python-pip```. Follow the steps from the below reference document based on your Operating System.
Reference: [https://docs.python-guide.org/starting/installation/](https://docs.python-guide.org/starting/installation/)

#### 2. Install MySQL Or any other DB I am using Mysql
Install ```mysql-8.0.15```. Follow the steps form the below reference document based on your Operating System.
Reference: [https://dev.mysql.com/doc/refman/5.5/en/](https://dev.mysql.com/doc/refman/5.5/en/)
#### 3. Setup virtual environment
```bash
# Install virtual environment
sudo pip install virtualenv

# Make a directory
mkdir envs

# Create virtual environment
virtualenv ./envs/

# Activate virtual environment
source envs/bin/activate
```

#### 4. Clone git repository
```bash
git clone "https://github.com/zishanjawed/Team-Wave.git"
```

#### 5. Install requirements
```bash
cd teamwave/
pip install -r requirements.txt
```


#### 6. Edit project settings
```bash
# open settings file in any code editor 
vim panorbit/settings.py

# Edit Database configurations with your MySQL configurations.
# Search for DATABASES section.
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': '<DB name>',
        'USER': '<mysql-user>',
        'PASSWORD': '<mysql-password>',
        'HOST': '<mysql-host>',
        'PORT': '<mysql-port>',
    }
}



# save the file
```
#### 7. Run the server
```bash
# Make migrations
python manage.py makemigrations
python manage.py migrate

# Run the server
python manage.py runserver 

# your server is up on port 8000
```
Try opening [http://localhost:8000](http://localhost:8000) in the browser.
Now you are good to go.

### 9. URLs
#### Search Based on parameter: [http://localhost:8001](http://localhost:8001)
![](https://i.imgur.com/6JMw2uX.jpg)
#### Fill The Imformation and click Search botton
![](https://i.imgur.com/tvoVhzI.jpg)
##### Now you will be able to see all response
#### Add People : [http://localhost:8001](http://localhost:8001)
![](https://i.imgur.com/eQf7cyv.jpg)
##### Here you can use the pagination below. 
![](https://i.imgur.com/wDAKE77.jpg)