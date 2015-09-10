from locust import HttpLocust, TaskSet, task

class ViewTaskSet(TaskSet):
    @task
    def view(self):
        self.client.get("/ads/view?appToken=a&type=feed&os=ios&osVersion=8.1&deviceModel=iPhone")

class Runner(HttpLocust):
    task_set = ViewTaskSet
    min_wait=5
    max_wait=2000
