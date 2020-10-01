package com.seo.Process;

import java.util.concurrent.Callable;

import com.seo.Exception.Seoexception;

public class Process implements Callable<ProcessOutput>{

	ProcessDTO processDTO = null;
	
	public Process(ProcessDTO processDTO ) throws Exception{
		try {
		
			//validateProcessDto(processDTO);
			this.processDTO = processDTO;
		
		} catch (Exception e) {
			throw e;
		}
		
	}
	
	private void validateProcessDto(ProcessDTO processDTO2)throws Exception {
		try {
		 new Seoexception("Need to validate data befor submission");
		} catch (Exception e) {
			throw e;
		}
		
	}

	@Override
	public ProcessOutput call() {
		ProcessOutput output = new ProcessOutput();
		try {
		} catch (Exception e) {
			output.setError(e.getMessage());
		}
	
		updateDatainDataBasewithOutput(output);
		return output;
	}

	private void updateDatainDataBasewithOutput(ProcessOutput output) {
		// TODO Auto-generated method stub
		
	}

}
