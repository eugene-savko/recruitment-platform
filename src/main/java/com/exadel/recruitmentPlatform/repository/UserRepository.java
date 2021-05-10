package com.exadel.recruitmentPlatform.repository;

import com.exadel.recruitmentPlatform.entity.InternshipRequestStatus;
import com.exadel.recruitmentPlatform.entity.User;
import com.exadel.recruitmentPlatform.entity.UserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    @Query("select u.id from User u where u.email = :email")
    Long findIdByEmail(@Param("email") String email);

    Page<User> findByRole(Pageable pageable, UserRole role);

    @Query("select u from User u join u.internshipRequest i where i.internshipId = :internshipId " +
            "or :internshipId is empty and i.specialityId in :specialityIds or :specialityIds is empty " +
            "and i.status in :statuses or :statuses is empty " +
            "and concat(u.firstName, ' ', u.lastName) like :fullName or :fullName is empty ")
    Page<User> findByFilterParam(Pageable pageable, Long internshipId, List<Long> specialityIds,
                                 List<InternshipRequestStatus> statuses, String fullName);

}
