package com.test.tamz.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/service/")
public class TestController {
	
	
	@RequestMapping(value="one", method = RequestMethod.POST, headers="Accept=Application/json")
	public Object getOne(@RequestBody Object test){
		
		System.out.println(test);
		
		return test;
	}
}
