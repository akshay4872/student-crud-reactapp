package com.manager.demo1.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.manager.demo1.modal.Member;


public interface Memberrepository  extends JpaRepository <Member, Long >   {

}
