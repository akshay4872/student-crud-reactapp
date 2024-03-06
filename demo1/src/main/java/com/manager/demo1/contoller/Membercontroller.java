package com.manager.demo1.contoller;




import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.manager.demo1.exception.ResourceNotFoundException;
import com.manager.demo1.repository.Memberrepository;

import com.manager.demo1.modal.Member;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class Membercontroller {
	@Autowired 
	private Memberrepository Memberrepository;
	
	
	// get all Members 
		@GetMapping("/Studentslist")
		public List <Member>getstudent(){
			return Memberrepository.findAll();
			}
		
		
		// we are creating a student posting details
		 @PostMapping("/Studentslist")
		 public  Member createstudent (@RequestBody Member member) {
			 System.out.println("this data is being posted");
			 return Memberrepository.save(member);
		 }
		 
		 
		 
		  @DeleteMapping("Studentslist/{id}")
		  public ResponseEntity < Map < String, Boolean >> deletestudent(@PathVariable Long id) {
		  	Member member = Memberrepository.findById(id)
		          .orElseThrow(() -> new ResourceNotFoundException("student not exist with id :" + id));

		      Memberrepository.delete(member);
		      Map < String, Boolean > response = new HashMap < > ();
		      response.put("deleted", Boolean.TRUE);
		      return ResponseEntity.ok(response);
		  }
		 
		// get website by id rest api
		  @GetMapping("/Studentslist/{id}")
		  public ResponseEntity < Member > getstudentById(@PathVariable Long id) {
		  	Member member = Memberrepository.findById(id)
		         .orElseThrow(() -> new ResourceNotFoundException("student not exist with id :" + id));
		      return ResponseEntity.ok(member);
		   }

		//  // update website rest api

		   @PutMapping("/Studentslist/{id}")
		  public ResponseEntity < Member > updatestudent(@PathVariable Long id, @RequestBody Member  student) {
				
				Member up = Memberrepository.findById(id)
		           .orElseThrow(() -> new ResourceNotFoundException("student not exist with id :" + id));

				up.setName(student.getName());
				up.setRole(student.getRole());
		
		      

		      Member updatestudent= Memberrepository.save(student);
		     return ResponseEntity.ok(updatestudent);  }
		  
		  
		 
		
		
		
		
	
	
	
	
	
}
