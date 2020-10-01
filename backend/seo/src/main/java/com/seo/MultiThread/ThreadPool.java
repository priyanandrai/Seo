package com.seo.MultiThread;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPool {

	static int Number_of_Non_Preimium_Memner_Thread = 5;
	static int Number_of_Preimium_Memner_Thread = 100;
	static ExecutorService executorService_non_premium = Executors.newFixedThreadPool(Number_of_Non_Preimium_Memner_Thread);
	static ExecutorService executorService_premium = Executors.newFixedThreadPool(Number_of_Preimium_Memner_Thread);
	
	public static void main(String[] args) {
	
	}
	
}
