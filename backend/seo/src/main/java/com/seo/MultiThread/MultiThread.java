package com.seo.MultiThread;

import java.util.concurrent.Future;

import com.seo.Process.Process;
import com.seo.Process.ProcessDTO;
import com.seo.Process.ProcessOutput;

public class MultiThread {

	public boolean submitTasktoThreadPool(Process process, boolean ispremuim) {

		try {
			Future<ProcessOutput> future = null; 
			if(ispremuim) {
		         ThreadPool.executorService_premium.submit(process);
			}else {
			      ThreadPool.executorService_non_premium.submit(process);
			}
			return true;
		} catch (Exception e) {
			return false;
		}

	}

	private void updateDatainDataBasewithOutput(ProcessOutput output) {
	try {
		
	} catch (Exception e) {
		// TODO: handle exception
	}
		
	}
	
	public static void main(String[] args) {
		System.out.println("I have to come here ");
		MultiThread multiThread = new MultiThread();
		
		try {
			for (int i = 0; i < 10; i++) {
				System.out.println("IIIIIIIIIIIII "+ i);
				
			}
			
			System.out.println("I Have to wait for task ");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
