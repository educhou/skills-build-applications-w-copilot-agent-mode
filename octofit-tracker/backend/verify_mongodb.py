from pymongo import MongoClient

def verify_mongodb():
    try:
        # Connect to the MongoDB instance running on localhost:27017
        client = MongoClient("mongodb://localhost:27017/")
        # Run a simple command to check the connection
        status = client.admin.command("ping")
        print("MongoDB is running:", status)
    except Exception as e:
        print("Failed to connect to MongoDB:", e)

def initialize_database():
    try:
        # Connect to MongoDB
        client = MongoClient("mongodb://localhost:27017/")
        db = client["octofit_db"]

        # Create collections and indexes
        db.users.create_index("email", unique=True)
        db.teams.create_index("team_name", unique=True)
        db.activities.create_index("activity_id", unique=True)
        db.leaderboard.create_index("leaderboard_id", unique=True)
        db.workouts.create_index("workout_id", unique=True)

        print("Database and collections initialized successfully.")
    except Exception as e:
        print("Error initializing database:", e)

if __name__ == "__main__":
    initialize_database()