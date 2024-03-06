package com.manager.demo1.modal;

import jakarta.persistence.*;



@Entity
// we are creating table 
@Table(name = "List_Ofstudents")
public class Member {
	
//  we are a creating  colonms of table 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "role")
    private String Role;
    

    public Member() {
    	
    }
    
    public Member(String name,String role) {
    	 super();
    	 
    	 
    	  this.name=name;
          this.Role=role;
    }
        
          
          // these are getters 
          public long getId() {
              return id;
          }
          public void setId(long id) {
              this.id = id;
          }

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getRole() {
			return Role;
		}

		public void setRole(String role) {
			Role = role;
		}
        
        
    
	
	
	

}
