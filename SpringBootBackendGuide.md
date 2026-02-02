# 从0开始创建Spring Boot后端服务

## 1. 使用IntelliJ IDEA创建Spring Boot项目

### 步骤1：打开IntelliJ IDEA
- 启动IntelliJ IDEA，选择"Create New Project"（创建新项目）

### 步骤2：选择Spring Initializr
- 在左侧菜单选择"Spring Initializr"
- 右侧选择默认的"Default"或"Custom"，建议使用默认的Spring Initializr URL
- 点击"Next"（下一步）

### 步骤3：配置项目基本信息
- **Group**：填写项目组ID，如`com.example`
- **Artifact**：填写项目名称，如`demo`
- **Type**：选择`Maven Project`
- **Language**：选择`Java`
- **Java Version**：选择适合的Java版本，建议使用`17`或`21`
- **Packaging**：选择`Jar`
- **Name**：填写项目名称，与Artifact保持一致
- **Description**：填写项目描述
- **Package name**：自动生成，通常为`Group + Artifact`，如`com.example.demo`
- 点击"Next"（下一步）

### 步骤4：选择依赖项
在"Dependencies"页面，选择以下依赖：
- **Spring Web**：用于创建Web应用和REST API
- **Spring Data JPA**：用于数据库访问和ORM映射
- **MySQL Driver**：用于连接MySQL数据库
- 可以根据需要添加其他依赖，如`Spring Boot DevTools`（用于开发热部署）
- 点击"Next"（下一步）

### 步骤5：完成项目创建
- 选择项目保存路径
- 点击"Finish"（完成）

IDEA将自动下载所需依赖并创建Spring Boot项目结构。

## 2. 配置MySQL数据库连接

### 步骤1：创建MySQL数据库
- 打开MySQL客户端（如MySQL Workbench或命令行）
- 创建数据库：`CREATE DATABASE demo_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`

### 步骤2：配置application.properties文件
在项目的`src/main/resources`目录下，找到`application.properties`文件，添加以下配置：

```properties
# 数据库连接配置
spring.datasource.url=jdbc:mysql://localhost:3306/demo_db?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA配置
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

**说明**：
- `spring.datasource.url`：数据库连接URL，`demo_db`为数据库名称
- `spring.datasource.username`：MySQL用户名
- `spring.datasource.password`：MySQL密码
- `spring.jpa.hibernate.ddl-auto=update`：自动更新数据库表结构
- `spring.jpa.show-sql=true`：打印SQL语句，便于调试

## 3. 创建实体类(Entity)

### 步骤1：创建包结构
在`src/main/java/com/example/demo`目录下，创建`entity`包

### 步骤2：创建User实体类

```java
package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String username;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private String email;
    
    // getter和setter方法
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
}
```

**说明**：
- `@Entity`：标识该类为JPA实体
- `@Table(name = "users")`：指定映射到数据库的表名
- `@Id`：标识主键
- `@GeneratedValue(strategy = GenerationType.IDENTITY)`：主键自增长
- `@Column`：定义列属性

## 4. 创建数据访问层(Repository)

### 步骤1：创建repository包
在`src/main/java/com/example/demo`目录下，创建`repository`包

### 步骤2：创建UserRepository接口

```java
package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // 可以添加自定义查询方法
    User findByUsername(String username);
}
```

**说明**：
- 继承`JpaRepository`接口，提供了CRUD操作和分页、排序等功能
- 可以自定义查询方法，如`findByUsername`

## 5. 创建业务逻辑层(Service)

### 步骤1：创建service包
在`src/main/java/com/example/demo`目录下，创建`service`包

### 步骤2：创建UserService接口

```java
package com.example.demo.service;

import com.example.demo.entity.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();
    User getUserById(Long id);
    User updateUser(Long id, User user);
    void deleteUser(Long id);
    User getUserByUsername(String username);
}
```

### 步骤3：创建UserServiceImpl实现类

```java
package com.example.demo.service.impl;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
    
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }
    
    @Override
    public User updateUser(Long id, User user) {
        User existingUser = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        existingUser.setEmail(user.getEmail());
        return userRepository.save(existingUser);
    }
    
    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
```

**说明**：
- `@Service`：标识该类为业务逻辑层组件
- `@Autowired`：自动注入UserRepository依赖
- 实现UserService接口的所有方法

## 6. 创建控制器层(Controller)实现API接口

### 步骤1：创建controller包
在`src/main/java/com/example/demo`目录下，创建`controller`包

### 步骤2：创建UserController类

```java
package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    // 创建用户
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
    
    // 获取所有用户
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    
    // 根据ID获取用户
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    
    // 更新用户
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User updatedUser = userService.updateUser(id, user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
    
    // 删除用户
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    // 根据用户名获取用户
    @GetMapping("/username/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        User user = userService.getUserByUsername(username);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
```

**说明**：
- `@RestController`：标识该类为REST控制器
- `@RequestMapping("/api/users")`：定义基础URL路径
- `@PostMapping`：处理POST请求，用于创建资源
- `@GetMapping`：处理GET请求，用于获取资源
- `@PutMapping`：处理PUT请求，用于更新资源
- `@DeleteMapping`：处理DELETE请求，用于删除资源
- `@RequestBody`：接收请求体中的JSON数据
- `@PathVariable`：获取URL路径参数
- `ResponseEntity`：封装响应状态码和响应体

## 7. 测试后端接口

### 步骤1：启动Spring Boot应用
- 找到主启动类`DemoApplication.java`（通常在`com.example.demo`包下）
- 右键点击，选择"Run DemoApplication"
- 等待应用启动成功，控制台输出"Started DemoApplication in xxx seconds"

### 步骤2：使用Postman或curl测试API接口

#### 测试创建用户（POST）
- URL：`http://localhost:8080/api/users`
- 请求方法：`POST`
- 请求体：
  ```json
  {
    "username": "testuser",
    "password": "123456",
    "email": "test@example.com"
  }
  ```
- 预期响应：创建成功，返回用户信息和201状态码

#### 测试获取所有用户（GET）
- URL：`http://localhost:8080/api/users`
- 请求方法：`GET`
- 预期响应：返回用户列表和200状态码

#### 测试根据ID获取用户（GET）
- URL：`http://localhost:8080/api/users/1`
- 请求方法：`GET`
- 预期响应：返回ID为1的用户信息和200状态码

#### 测试更新用户（PUT）
- URL：`http://localhost:8080/api/users/1`
- 请求方法：`PUT`
- 请求体：
  ```json
  {
    "username": "updateduser",
    "password": "654321",
    "email": "updated@example.com"
  }
  ```
- 预期响应：返回更新后的用户信息和200状态码

#### 测试删除用户（DELETE）
- URL：`http://localhost:8080/api/users/1`
- 请求方法：`DELETE`
- 预期响应：返回204状态码，无响应体

## 项目结构总结

```
src/main/java/com/example/demo/
├── DemoApplication.java          # 主启动类
├── controller/                   # 控制器层
│   └── UserController.java       # 用户API控制器
├── entity/                       # 实体类
│   └── User.java                 # 用户实体
├── repository/                   # 数据访问层
│   └── UserRepository.java       # 用户Repository接口
└── service/                      # 业务逻辑层
    ├── UserService.java          # 用户Service接口
    └── impl/
        └── UserServiceImpl.java  # 用户Service实现

src/main/resources/
└── application.properties        # 配置文件
```

## 扩展建议

1. **添加异常处理**：创建全局异常处理器，统一处理异常
2. **添加日志**：使用SLF4J和Logback记录日志
3. **添加认证和授权**：集成Spring Security实现JWT认证
4. **添加API文档**：集成Swagger或SpringDoc生成API文档
5. **添加单元测试和集成测试**：使用JUnit和MockMvc测试接口
6. **添加分页和排序**：优化列表查询，支持分页和排序
7. **添加数据校验**：使用Bean Validation验证请求数据
8. **添加缓存**：使用Spring Cache或Redis缓存热点数据

## 常见问题解决

1. **数据库连接失败**：
   - 检查MySQL服务是否启动
   - 检查数据库名称、用户名和密码是否正确
   - 检查MySQL驱动版本是否兼容

2. **端口被占用**：
   - 在application.properties中添加`server.port=8081`修改端口

3. **实体类映射问题**：
   - 检查@Entity、@Table、@Id等注解是否正确
   - 检查字段类型是否与数据库匹配

4. **依赖冲突**：
   - 检查pom.xml中依赖版本是否兼容
   - 使用`mvn dependency:tree`查看依赖树，解决冲突

通过以上步骤，你已经成功创建了一个基于Spring Boot和MySQL的后端服务，并实现了基本的CRUD API接口。你可以根据实际需求扩展更多功能。