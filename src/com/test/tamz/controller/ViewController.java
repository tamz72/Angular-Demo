package com.test.tamz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/view/")
public class ViewController {

	@RequestMapping(value = "index", headers = "Accept=Application/json")
	public String home() {
		return "index";
	}

}
