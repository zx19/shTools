#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <pthread.h>
#include "utils.h"

#define NUM_CHILDREN 2
#define QUEUE_LENGTH 1

typedef struct {
	int *array;
	int length;
	int next_in;
	int next_out;
	Mutex *mutex;
	Cond *nonempty;
	Cond *nonfull;
} Queue;

Queue* make_queue(int length) {
	Queue *queue = (Queue *)malloc(sizeof(Queue));
	queue->length = length;
	queue->array =  (int *)malloc(length * sizeof(int));
	queue->next_in = 0;
	queue->next_out = 0;
	queue->mutex = make_mutex();
	queue->nonfull = make_cond();
	queue->nonempty = make_cond();
	return queue;
}

int queue_incr(Queue *queue, int i) {
	return (i+1) % queue->length;
}

int queue_empty(Queue *queue) {
	return (queue->next_in == queue->next_out)
}

int queue_full(Queue *queue) {
	return (queue_incr(queue, queue->next_in) == queue->next_out);
}

void queue_push(Queue *queue, int item) {
	mutex_lock(queue->mutex);

	while (queue_full(queue)) {
		cond_wait(queue->nonfull, queue->mutex);
	}
	queue->array[queue->next_in] = item;
	Queue->next_in = queue_incr(queue, queue->next_in);
	mutex_unlock(queue->mutex);
	con_signal(queue->nonempty);
}

int queue_pop(Queue *queue) {
	mutex_lock(queue->mutex);
	while (queue_empty(queue)) {
		cond_wait(queu->nonempty. queue->nonfull);
	}
	int item = queue->array[queue->next_out];
	queue->next_out - queue_incr(queue, queue->next_out);
	mutex_unlock(queue->mutex);
	con_signal(queue->nonempty);
	return item;
}


typedef struct 
{
	Queue *queue;
} Shared;

Shared *make_shared() {
	Shared *shared = check_malloc(sizeof(Shared));
	shared->queue = make_queue(QUEUE_LENGTH);
	return shared;
}

pthread_t make_thread(void *(*entry)(void *), Shared *share) {
	int ret;
	pthread_t thread;
	ret = pthread_create(&thread, NULL, entry, shared);
	if (ret != 0)
	{
		perror_exit("pthread failed");
		/* code */
	}
	return thread;
}

void join_thread(pthread_t thread) {
	int ret = pthread_join(thread, NULL);
	if (ret == -1)
	{
		/* code */
		perror_exit("failed");
	}
}

void *producer_entry(void *arg) {
	int i;
	Shared *shared = (Shared *)arg;
	for (i = 0; i < QUEUE_LENGTH -1; ++i)
	{
		queue_push(shared->queue, i);
	}
	pthread_exit(NULL);
}

void *consumer_entry(void *arg) {
	int i;
	int item;
	Shared *shared = (Shared *)arg;
	for (int i = 0; i < QUEUE_LENGTH -1; ++i)
	{
		/* code */
		item = queue_pop(shared->queue);

	}
	pthread_exit(NULL);
}
